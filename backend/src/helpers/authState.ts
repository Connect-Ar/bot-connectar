/*

   NÃO REMOVER

   Fornecido por Claudemir Todo Bom
   Licenciado para Raphael Batista / Equipechat
   
   Licença vitalícia e exclusiva. Não pode ser sublicenciado a terceiros

 */

import type {
  AuthenticationCreds,
  AuthenticationState,
  SignalDataTypeMap
} from "@whiskeysockets/baileys";
import { BufferJSON, initAuthCreds, proto } from "@whiskeysockets/baileys";
import Whatsapp from "../models/Whatsapp";
import BaileysKeys from "../models/BaileysKeys";
import { logger } from "../utils/logger";

const authState = async (
  whatsapp: Whatsapp
): Promise<{ state: AuthenticationState; saveState: () => void }> => {
  let creds: AuthenticationCreds;
  const whatsappId = whatsapp.id;

  const saveKey = async (type: string, key: string, value: any) => {
    logger.debug(`Storing key whatsappId: ${whatsappId} type: ${type} key: ${key}`);
    return BaileysKeys.upsert({ whatsappId, type, key, value: JSON.stringify(value)});
  }
  
  const getKey = async (type: string, key: string) => {
    const baileysKey = await BaileysKeys.findOne({
      where: {
        whatsappId,
        type,
        key,
      }
    });

    logger.debug(`${baileysKey ? "Successfull" : "Failed"} recover of key whatsappId: ${whatsappId} type: ${type} key: ${key}`);

    return baileysKey?.value ? JSON.parse(baileysKey.value) : null;
  }
  
  const removeKey = async (type: string, key: string) => {
    logger.debug({type, key}, "Deleting key");
    return BaileysKeys.destroy({
      where: {
        whatsappId,
        type,
        key,
      }
    });
  }

  const saveState = async () => {
    try {
      await whatsapp.update({
        session: JSON.stringify({ creds, keys: {} }, BufferJSON.replacer, 0)
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (whatsapp.session && whatsapp.session !== null) {
    const result = JSON.parse(whatsapp.session, BufferJSON.reviver);
    creds = result.creds;
    const {keys} = result;
  } else {
    creds = initAuthCreds();
  }

  return {
    state: {
      creds,
      keys: {
        get: async (type, ids) => {
          const data: { [_: string]: SignalDataTypeMap[typeof type] } = {};

          // eslint-disable-next-line no-restricted-syntax
          for await (const id of ids) {
            try {
              let value = await getKey(type, id);
              if (value && type === "app-state-sync-key") {
                value = proto.Message.AppStateSyncKeyData.fromObject(value);
              }
              data[id] = value;
            } catch (error) {
              logger.error(
                `authState (69) -> error: ${error.message}`
              );
              logger.error(
                `authState (72) -> stack: ${error.stack}`
              );
            }
          }

          return data;
        },
        set: async (data: any) => {
          const tasks: Promise<unknown>[] = [];
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const category in data) {
            // eslint-disable-next-line no-restricted-syntax, guard-for-in
            for (const id in data[category]) {
              const value = data[category][id];
              tasks.push(value ? saveKey(category, id, value) : removeKey(category, id));
            }
          }

          await Promise.all(tasks);
        }
      }
    },
    saveState
  };
};

export default authState;
