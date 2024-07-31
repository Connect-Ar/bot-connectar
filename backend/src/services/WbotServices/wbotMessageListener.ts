export function validaCpfCnpj(val) {
  if (val.length == 11) {
    var cpf = val.trim();

    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace('-', '');
    cpf = cpf.split('');

    var v1 = 0;
    var v2 = 0;
    var aux = false;

    for (var i = 1; cpf.length > i; i++) {
      if (cpf[i - 1] != cpf[i]) {
        aux = true;
      }
    }

    if (aux == false) {
      return false;
    }

    for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
      v1 += cpf[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
      v1 = 0;
    }

    if (v1 != cpf[9]) {
      return false;
    }

    for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
      v2 += cpf[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
      v2 = 0;
    }

    if (v2 != cpf[10]) {
      return false;
    } else {
      return true;
    }
  } else if (val.length == 14) {
    var cnpj = val.trim();

    cnpj = cnpj.replace(/\./g, '');
    cnpj = cnpj.replace('-', '');
    cnpj = cnpj.replace('/', '');
    cnpj = cnpj.split('');

    var v1 = 0;
    var v2 = 0;
    var aux = false;

    for (var i = 1; cnpj.length > i; i++) {
      if (cnpj[i - 1] != cnpj[i]) {
        aux = true;
      }
    }

    if (aux == false) {
      return false;
    }

    for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
      if (p1 >= 2) {
        v1 += cnpj[i] * p1;
      } else {
        v1 += cnpj[i] * p2;
      }
    }

    v1 = (v1 % 11);

    if (v1 < 2) {
      v1 = 0;
    } else {
      v1 = (11 - v1);
    }

    if (v1 != cnpj[12]) {
      return false;
    }

    for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
      if (p1 >= 2) {
        v2 += cnpj[i] * p1;
      } else {
        v2 += cnpj[i] * p2;
      }
    }

    v2 = (v2 % 11);

    if (v2 < 2) {
      v2 = 0;
    } else {
      v2 = (11 - v2);
    }

    if (v2 != cnpj[13]) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

//...

const downloadMedia = async (msg: proto.IWebMessageInfo, isImported: Date = null) => {

  let buffer
  try {
    buffer = await downloadMediaMessage(
      msg,
      'buffer',
      {}
    )
  } catch (err) {
    if (isImported) {
      console.log("Falla al descargar un mensaje importado, probablemente el mensaje ya no esté disponible")
    } else {
      console.error('Error al descargar el medio:', err);
    }
    // Manejar el error según sea necesario
  }

  let filename = msg.message?.documentMessage?.fileName || "";

  const mineType =
    msg.message?.imageMessage ||
    msg.message?.audioMessage ||
    msg.message?.videoMessage ||
    msg.message?.stickerMessage ||
    msg.message?.documentMessage ||
    msg.message?.documentWithCaptionMessage?.message?.documentMessage ||
    msg.message?.ephemeralMessage?.message?.audioMessage ||
    msg.message?.ephemeralMessage?.message?.documentMessage ||
    msg.message?.ephemeralMessage?.message?.videoMessage ||
    msg.message?.ephemeralMessage?.message?.stickerMessage ||
    msg.message?.ephemeralMessage?.message?.imageMessage ||
    msg.message?.viewOnceMessage?.message?.imageMessage ||
    msg.message?.viewOnceMessage?.message?.videoMessage ||
    msg.message?.ephemeralMessage?.message?.viewOnceMessage?.message?.imageMessage ||
    msg.message?.ephemeralMessage?.message?.viewOnceMessage?.message?.videoMessage ||
    msg.message?.ephemeralMessage?.message?.viewOnceMessage?.message?.audioMessage ||
    msg.message?.ephemeralMessage?.message?.viewOnceMessage?.message?.documentMessage ||
    msg.message?.templateMessage?.hydratedTemplate?.imageMessage ||
    msg.message?.templateMessage?.hydratedTemplate?.documentMessage ||
    msg.message?.templateMessage?.hydratedTemplate?.videoMessage ||
    msg.message?.templateMessage?.hydratedFourRowTemplate?.imageMessage ||
    msg.message?.templateMessage?.hydratedFourRowTemplate?.documentMessage ||
    msg.message?.templateMessage?.hydratedFourRowTemplate?.videoMessage ||
    msg.message?.templateMessage?.fourRowTemplate?.imageMessage ||
    msg.message?.templateMessage?.fourRowTemplate?.documentMessage ||
    msg.message?.templateMessage?.fourRowTemplate?.videoMessage ||
    msg.message?.interactiveMessage?.header?.imageMessage ||
    msg.message?.interactiveMessage?.header?.documentMessage ||
    msg.message?.interactiveMessage?.header?.videoMessage

  if (!filename) {
    const ext = mineType.mimetype.split("/")[1].split(";")[0];
    filename = `${new Date().getTime()}.${ext}`;
  } else {
    filename = `${new Date().getTime()}_${filename}`;
  }

  const media = {
    data: buffer,
    mimetype: mineType.mimetype,
    filename
  };

  return media;
}

//...

const transferQueue = async (
  queueId: number,
  ticket: Ticket,
  contact: Contact
): Promise<void> => {
  await UpdateTicketService({
    ticketData: { queueId: queueId, useIntegration: false, promptId: null },
    ticketId: ticket.id,
    companyId: ticket.companyId
  });
};

//...

export const getBodyMessage = (msg: proto.IWebMessageInfo): string | null => {

  try {
    let type = getTypeMessage(msg);

    const types = {
      conversation: msg.message?.conversation,
      imageMessage: msg.message?.imageMessage?.caption,
      videoMessage: msg.message?.videoMessage?.caption,
      extendedTextMessage: msg?.message?.extendedTextMessage?.text,
      buttonsResponseMessage: msg.message?.buttonsResponseMessage?.selectedDisplayText,
      listResponseMessage: msg.message?.listResponseMessage?.title || msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId,
      templateButtonReplyMessage: msg.message?.templateButtonReplyMessage?.selectedId,
      messageContextInfo: msg.message?.buttonsResponseMessage?.selectedButtonId || msg.message?.listResponseMessage?.title,
      buttonsMessage: getBodyButton(msg) || msg.message?.listResponseMessage?.title,
      stickerMessage: "sticker",
      contactMessage: msg.message?.contactMessage?.vcard,
      contactsArrayMessage: (msg.message?.contactsArrayMessage?.contacts) && contactsArrayMessageGet(msg),
      locationMessage: msgLocation(msg.message?.locationMessage?.jpegThumbnail, msg.message?.locationMessage?.degreesLatitude, msg.message?.locationMessage?.degreesLongitude),
      liveLocationMessage: `Latitude: ${msg.message?.liveLocationMessage?.degreesLatitude} - Longitude: ${msg.message?.liveLocationMessage?.degreesLongitude}`,
      documentMessage: msg.message?.documentMessage?.caption,
      audioMessage: "Áudio",
      listMessage: getBodyList(msg) || msg.message?.listResponseMessage?.title,
      viewOnceMessage: getBodyButton(msg),
      reactionMessage: msg.message?.reactionMessage?.text || "reaction",
      senderKeyDistributionMessage: msg?.message?.senderKeyDistributionMessage?.axolotlSenderKeyDistributionMessage,
      documentWithCaptionMessage: msg.message?.documentWithCaptionMessage?.message?.documentMessage?.caption,
      viewOnceMessageV2: msg.message?.viewOnceMessageV2?.message?.imageMessage?.caption,
      editedMessage:
        msg?.message?.protocolMessage?.editedMessage?.conversation ||
        msg?.message?.editedMessage?.message?.protocolMessage?.editedMessage?.conversation,
      ephemeralMessage: msg.message?.ephemeralMessage?.message?.extendedTextMessage?.text,
      imageWhitCaptionMessage: msg?.message?.ephemeralMessage?.message?.imageMessage,
      highlyStructuredMessage: msg.message?.highlyStructuredMessage,
      protocolMessage: msg?.message?.protocolMessage?.editedMessage?.conversation
    };

    const objKey = Object.keys(types).find(key => key === type);

    if (!objKey) {
      logger.warn(`#### No se encontró el tipo 152: ${type}
${JSON.stringify(msg)}`);
      Sentry.setExtra("Mensaje", { BodyMsg: msg.message, msg, type });
      Sentry.captureException(
        new Error("Nuevo tipo de mensaje en getTypeMessage")
      );
    }
    return types[type];
  } catch (error) {
    Sentry.setExtra("Error getTypeMessage", { msg, BodyMsg: msg.message });
    Sentry.captureException(error);
    console.log(error);
  }
};

//...

const verifyQueue = async (
  wbot: Session,
  msg: proto.IWebMessageInfo,
  ticket: Ticket,
  contact: Contact,
  mediaSent?: Message | undefined,
  ticketTraking?: TicketTraking
) => {
  const companyId = ticket.companyId;

  const { queues, greetingMessage, maxUseBotQueues, timeUseBotQueues, mediaName, mediaPath } = await ShowWhatsAppService(wbot.id!, ticket.companyId)

  if (queues.length === 1) {
    const firstQueue = head(queues);
    let chatbot = false;
    if (firstQueue?.options) {
      chatbot = firstQueue.options.length > 0;
    }

    //inicia integración dialogflow/n8n
    if (
      !msg.key.fromMe &&
      !ticket.isGroup &&
      !isNil(queues[0]?.integrationId)
    ) {
      const integrations = await ShowQueueIntegrationService(queues[0].integrationId, companyId);

      await handleMessageIntegration(msg, wbot, integrations, ticket)

      await ticket.update({
        useIntegration: true,
        integrationId: integrations.id
      })
      // return;
    }
    //inicia integración openai
    if (
      !msg.key.fromMe &&
      !ticket.isGroup &&
      !isNil(queues[0]?.promptId)
    ) {

      await handleOpenAi(msg, wbot, ticket, contact, mediaSent, ticketTraking);

      await ticket.update({
        useIntegration: true,
        promptId: queues[0]?.promptId
      })
      // return;
    }

    await UpdateTicketService({
      ticketData: { queueId: firstQueue?.id, chatbot },
      ticketId: ticket.id,
      companyId: ticket.companyId,
    });

    if (greetingMessage.trim() !== "") {
      const textMessage = {
        text: formatBody(`\u200e${greetingMessage}`, contact),
      };
      const sendMsg = await wbot.sendMessage(
        `${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`,
        textMessage
      );

      await verifyMessage(sendMsg, ticket, ticket.contact, false, ticketTraking);
    }

    return;
  }

  // REGLA PARA DESHABILITAR EL BOT PARA ALGÚN CONTACTO
  if (contact.disableBot) {
    return;
  }

  const selectedOption = getBodyMessage(msg);
  const choosenQueue = queues[+selectedOption - 1];

  const buttonActive = await Setting.findOne({
    where: {
      key: "chatBotType",
      companyId
    }
  });

  const botText = async () => {
    let options = "";

    queues.forEach((queue, index) => {
      options += `*[ ${index + 1} ]* - ${queue.name}\n`;
    });

    const textMessage = {
      text: formatBody(`\u200e${greetingMessage}\n\n${options}`, contact),
    };

    // @ts-ignore
    const messageFinal = formatBody(`\u200e${greetingMessage}\n\n${options}`, contact),
    var sendMsg;

    if (mediaPath) {
      const filePath = path.resolve("public", mediaPath);
      const messagePath = messageFinal

      let options2 = await getMessageOptions(messagePath, filePath, messagePath);

      sendMsg = await wbot.sendMessage(
        `${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`,
        {
          ...options2
        }
      );
    } else {
      sendMsg = await wbot.sendMessage(
        `${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`,
        textMessage
      );
    }

    await verifyMessage(sendMsg, ticket, ticket.contact, false, ticketTraking);

    await UpdateTicketService({
      ticketData: { amountUsedBotQueues: ticket.amountUsedBotQueues + 1 },
      ticketId: ticket.id,
      companyId
    });
  };

  if (choosenQueue) {

    let chatbot = false;
    if (choosenQueue?.options) {
      chatbot = choosenQueue.options.length > 0;
    }

    await UpdateTicketService({
      ticketData: { queueId: choosenQueue.id, chatbot },
      ticketId: ticket.id,
      companyId: ticket.companyId,
    });

    /* Tratamiento para el envío de mensajes cuando la cola está fuera de horario */
    if (choosenQueue.options.length === 0) {
      const queue = await Queue.findByPk(choosenQueue.id);
      const { schedules }: any = queue;
      const now = moment();
      const weekday = now.format("dddd").toLowerCase();
      let schedule;
      if (Array.isArray(schedules) && schedules.length > 0) {
        schedule = schedules.find((s) => s.weekdayEn === weekday && s.startTime !== "" && s.startTime !== null && s.endTime !== "" && s.endTime !== null);
      }

      if (queue.outOfHoursMessage !== null && queue.outOfHoursMessage !== "" && !isNil(schedule)) {
        const startTime = moment(schedule.startTime, "HH:mm");
        const endTime = moment(schedule.endTime, "HH:mm");

        if (now.isBefore(startTime) || now.isAfter(endTime)) {
          const body = formatBody(`\u200e ${queue.outOfHoursMessage}\n\n*[ # ]* - Volver al Menú Principal`, ticket.contact);
          const sentMessage = await wbot.sendMessage(
            `${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`, {
            text: body,
          }
          );
          await verifyMessage(sentMessage, ticket, contact, false, ticketTraking);
          await UpdateTicketService({
            ticketData: { queueId: null, chatbot },
            ticketId: ticket.id,
            companyId: ticket.companyId,
          });
          return;
        }
      }

      //inicia integración dialogflow/n8n
      if (
        !msg.key.fromMe &&
        !ticket.isGroup &&
        choosenQueue.integrationId
      ) {
        const integrations = await ShowQueueIntegrationService(choosenQueue.integrationId, companyId);

        await handleMessageIntegration(msg, wbot, integrations, ticket)

        await ticket.update({
          useIntegration: true,
          integrationId: integrations.id
        })
        // return;
      }

      //inicia integración openai
      if (
        !msg.key.fromMe &&
        !ticket.isGroup &&
        !isNil(choosenQueue?.promptId)
      ) {
        await handleOpenAi(msg, wbot, ticket, contact, mediaSent, ticketTraking);

        await ticket.update({
          useIntegration: true,
          promptId: choosenQueue?.promptId
        })
        // return;
      }

      const body = formatBody(`\u200e${choosenQueue.greetingMessage}`, ticket.contact
      );
      if (choosenQueue.greetingMessage) {
        const sentMessage = await wbot.sendMessage(
          `${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`, {
          text: body,
        }
        );
        await verifyMessage(sentMessage, ticket, contact, false, ticketTraking);
      }
    }

  } else {

    if (maxUseBotQueues && maxUseBotQueues !== 0 && ticket.amountUsedBotQueues >= maxUseBotQueues) {
      // await UpdateTicketService({
      //   ticketData: { queueId: queues[0].id },
      //   ticketId: ticket.id
      // });

      return;
    }

    //Regla para deshabilitar el chatbot por x minutos/horas después del primer envío
    // const ticketTraking = await FindOrCreateATicketTrakingService({ ticketId: ticket.id, companyId });
    let dataLimite = new Date();
    let Ahora = new Date();

    if (ticketTraking.chatbotAt !== null) {
      dataLimite.setMinutes(ticketTraking.chatbotAt.getMinutes() + (Number(timeUseBotQueues)));

      if (ticketTraking.chatbotAt !== null && Ahora < dataLimite && timeUseBotQueues !== "0" && ticket.amountUsedBotQueues !== 0) {
        return
      }
    }

    await ticketTraking.update({
      chatbotAt: null,
      contactId: ticket.contactId,
      status: ticket.status,
      queueId: ticket.queueId,
      userId: ticket.userId,
      lastMessage: getBodyMessage(msg)
    });

    if (ticket.amountUsedBotQueues > 0) {
      await sleep(1000);

      await wbot.sendMessage(`${contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`, {
        text: 'Opción inválida, por favor elija una opción válida a continuación:',
      });

      await sleep(500);
    }

    if (buttonActive.value === "text") {
      return botText();
    }
  }
};

export const handleRating = async (
  rate: number,
  ticket: Ticket,
  ticketTraking: TicketTraking
) => {
  const io = getIO();
  const companyId = ticket.companyId;

  const { complationMessage } = await ShowWhatsAppService(
    ticket.whatsappId,
    companyId
  );

  let finalRate = rate;

  if (rate < 0) {
    finalRate = 0;
  }
  if (rate > 3) {
    finalRate = 3;
  }

  await UserRating.create({
    ticketId: ticketTraking.ticketId,
    companyId: ticketTraking.companyId,
    userId: ticketTraking.userId,
    ticketTrakingId: ticketTraking.id,
    rate: finalRate,
  });

  if (!isNil(complationMessage) && complationMessage !== "" && !ticket.isGroup) {
    const body = formatBody(`\u200e ${complationMessage}`, ticket.contact);
    const msg = await SendWhatsAppMessage({ body, ticket });

    await verifyMessage(msg, ticket, ticket.contact, false, ticketTraking);
  }

  await ticket.update({
    chatbot: false,
    status: "closed"
  });

  io.to(`company-${ticket.companyId}-open`)
    .to(`queue-${ticket.queueId}-open`)
    .to(ticket.id.toString())
    .emit(`company-${ticket.companyId}-ticket`, {
      action: "delete",
      ticket,
      ticketId: ticket.id,
    });

  io.to(`company-${ticket.companyId}-${ticket.status}`)
    .to(`queue-${ticket.queueId}-${ticket.status}`)
    .to(ticket.id.toString())
    .emit(`company-${ticket.companyId}-ticket`, {
      action: "update",
      ticket,
      ticketId: ticket.id
    });
};

export const handleMessageIntegration = async (
  msg: proto.IWebMessageInfo,
  wbot: Session,
  queueIntegration: QueueIntegrations,
  ticket: Ticket
): Promise<void> => {
  // REGLA PARA DESHABILITAR EL BOT PARA ALGÚN CONTACTO
  if (ticket.contact.disableBot) {
    return;
  }
  const msgType = getTypeMessage(msg);

  if (queueIntegration.type === "n8n" || queueIntegration.type === "webhook") {
    if (queueIntegration?.urlN8N) {
      const options = {
        method: "POST",
        url: queueIntegration?.urlN8N,
        headers: {
          "Content-Type": "application/json"
        },
        json: msg
      };
      try {
        request(options, function (error, response) {
          if (error) {
            throw new Error(error);
          }
          else {
            console.log(response.body);
          }
        });
      } catch (error) {
        throw new Error(error);
      }
    }
  } else if (queueIntegration.type === "typebot") {
    //console.log("entrou no typebot")
    // await typebots(ticket, msg, wbot, queueIntegration);
    await typebotListener({ ticket, msg, wbot, typebot: queueIntegration });
  }
};

//...

const handleMsgAck = async (msg: WAMessage, chat: number | null | undefined) => {
  await new Promise((r) => setTimeout(r, 500));
  const io = getIO();

  try {
    const messageToUpdate = await Message.findByPk(msg.key.id, {
      include: [
        "contact",
        {
          model: Message,
          as: "quotedMsg",
          include: ["contact"],
        },
      ],
    });

    if (!messageToUpdate) return;
    await messageToUpdate.update({ ack: chat });
    io.to(messageToUpdate.ticketId.toString()).emit(
      `company-${messageToUpdate.companyId}-appMessage`,
      {
        action: "update",
        message: messageToUpdate,
      }
    );
  } catch (err) {
    Sentry.captureException(err);
    logger.error(`Error handling message ack 1. Err: ${err}`);
  }
};

//...
