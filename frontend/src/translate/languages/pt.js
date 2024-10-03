const messages = {
  es: {
    translations: {
      signup: {
        title: "Regístrate",
        toasts: {
          success: "¡Usuario creado con éxito! ¡Inicia sesión!",
          fail: "Error al crear el usuario. Verifica los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "¿No tienes una cuenta? ¡Regístrate!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programaciones",
          enabled: "Habilitado",
          disabled: "Deshabilitado",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡Conexión con WhatsApp eliminada con éxito!",
        },
        confirmationModal: {
          closedImportedTitle: "Cerrar tickets importados",
          closedImportedMessage:
            "Si confirmas, todos los tickets importados serán cerrados",
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Estás seguro? Necesitarás escanear el código QR nuevamente.",
        },
        buttons: {
          support: "Soporte",
          add: "Agregar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Intentar de nuevo",
          qrcode: "Código QR",
          newQr: "Nuevo Código QR",
          connecting: "Conectando",
          closedImported: "Cerrar todos los tickets importados",
          preparing: "Preparando mensajes para importar",
          importing: "Importando mensajes de WhatsApp",
        },
        typography: {
          processed: "Procesado",
          in: "de",
          date: "Fecha del mensaje",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrate de que tu teléfono esté conectado a internet e intenta nuevamente, o solicita un nuevo código QR",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haz clic en el botón 'Código QR' y escanea el código con tu teléfono para iniciar la sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Se perdió la conexión con el teléfono",
            content:
              "Asegúrate de que tu teléfono esté conectado a internet y WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Fila",
          timeSendQueue: "Redirigir a fila en X minutos",
          queueRedirection: "Redirección de Fila",
          queueRedirectionDesc:
            "Selecciona una fila para redirigir los contactos que no tienen fila",
          prompt: "Prompt",
          maxUseBotQueues: "Enviar bot x veces",
          timeUseBotQueues: "Intervalo en minutos entre envío de bot",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
          importAlert:
            "ATENCIÓN: Al guardar, tu conexión se cerrará, será necesario escanear el código QR nuevamente para importar los mensajes",
          importOldMessagesEnable: "Importar mensajes del dispositivo",
          importOldMessages: "Fecha de inicio de importación",
          importRecentMessages: "Fecha de finalización de importación",
          importOldMessagesGroups: "Importar mensajes de grupo",
          closedTicketsPostImported: "Cerrar tickets después de la importación",
        },
        confirmation: {
          title: "Eliminar adjunto",
          message: "Esta opción no se puede revertir. ¿Deseas continuar?",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Escanea el código QR para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          importTitlte: "Importar contactos",
          deleteMessage:
            "¿Estás seguro de que deseas eliminar este contacto? Se perderán todas las atenciones relacionadas.",
          importMessage: "¿Deseas importar todos los contactos del teléfono?",
          deleteAllMessage:
            "¿Estás seguro de que deseas eliminar todos los contactos de esta empresa? Se perderán todas las atenciones relacionadas.",
          deleteTitleAll: "Eliminar todos los contactos",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
          remove: "Eliminar todos los contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Lenguaje",
          jsonContent: "Contenido JSON",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "Integración agregada con éxito.",
          editSuccess: "Integración editada con éxito.",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "Clave API",
          max_messages: "Máximo de mensajes en el historial",
          voiceKey: "Clave API de Voz",
          voiceRegion: "Región de Voz",
        },
        success: "¡Prompt guardado con éxito!",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Fila",
          max_tokens: "Máximo de tokens en la respuesta",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      passwordReset: {
        title: "Restablecer contraseña",
        voltar: "Volver a la pantalla de inicio de sesión",
        form: {
          email: "Correo electrónico",
        },
        buttons: {
          submit: "Verificar correo electrónico",
          verify: "Verificar código",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de WhatsApp",
          email: "Correo electrónico",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          chatBotContact: "Deshabilitar chatbot",
          whatsapp: "Conexión de origen: ",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado con éxito.",
      },
      queueModal: {
        title: {
          add: "Agregar fila",
          edit: "Editar fila",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Mensaje de evaluación",
          token: "Token",
          orderQueue: "Orden de la fila (Bot)",
          integrationId: "Integración",
          closeTicket: "Cerrar ticket",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        bot: {
          title: "Opciones",
          toolTipTitle: "Agrega opciones para construir un chatbot",
          toolTip:
            "Si solo hay una opción, se elegirá automáticamente, haciendo que el bot responda con el mensaje de la opción y continúe",
          selectOption: "Selecciona una opción",
          text: "Texto",
          attendent: "Atendente",
          queue: "Fila",
          integration: "Integración",
          file: "Archivo",
          toolTipMessageTitle:
            "El mensaje es obligatorio para continuar al siguiente nivel",
          toolTipMessageContent:
            "El mensaje es obligatorio para continuar al siguiente nivel",
          selectUser: "Selecciona un usuario",
          selectQueue: "Selecciona una fila",
          selectIntegration: "Selecciona una integración",
          addOptions: "Agregar opciones",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión predeterminada",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado con éxito.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Programación",
          edit: "Editar Programación",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de Programación",
          sentAt: "Fecha de Envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Programación guardada con éxito.",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada con éxito.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para comenzar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop:
            "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO DE ABAJO",
          titleFileList: "Lista de archivo(s)",
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "+",
          closeallTicket: "Cerrar todos",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SÍ",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos",
        },
        toasts: {
          deleted: "El ticket en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertos" },
          group: { title: "Grupos" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar ticket y mensajes",
          filterConnections: "Filtrar por conexiones",
          filterContacts: "Filtrar por contacto",
          filterConections: "Filtrar por Conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente",
          },
          filterUsers: "Filtrar por usuarios",
          ticketsPerPage: "Tickets por página",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escribe para buscar usuarios",
        fieldQueueLabel: "Transferir a fila",
        fieldQueuePlaceholder: "Selecciona una fila",
        noOptions: "No se encontró ningún usuario con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage:
          "No se encontró ningún ticket con ese estado o término buscado",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          reopen: "Reabrir",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      contactImportWpModal: {
        title: "Exportar Contactos a Excel",
        buttons: {
          downloadModel: "Descargar modelo de Excel para importación",
          closed: "Cerrar",
          import: "Selecciona el archivo de Excel para importar contactos",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Panel",
          connections: "Conexiones",
          tickets: "Atenciones",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Filas & Chatbot",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Programaciones",
          campaigns: "Campañas",
          annoucements: "Anuncios",
          chats: "Chat Interno",
          financeiro: "Financiero",
          files: "Lista de archivos",
          prompts: "Open.Ai",
          queueIntegration: "Integraciones",
          reports: "Informes",
          logout: "Salir",
        },
        appBar: {
          i18n: {
            language: "Español",
            language_short: "ES",
          },
          user: {
            profile: "Perfil",
            logout: "Salir",
            language: "Seleccionar idioma",
          },
          styleDark: "Modo oscuro",
          styleLight: "Modo claro",
          language: "Idioma",
        },
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Lenguaje",
          lastUpdate: "Última actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! y será eliminada de las filas y conexiones vinculadas",
        },
      },
      reports: {
        title: "Informes de Atenciones",
        table: {
          id: "Ticket",
          user: "Usuario",
          dateOpen: "Fecha de Apertura",
          dateClose: "Fecha de Cierre",
          NPS: "NPS",
          status: "Estado",
          whatsapp: "Conexión",
          queue: "Fila",
          actions: "Acciones",
          lastMessage: "Último Mensaje",
          contact: "Cliente",
          supportTime: "Tiempo de Atención",
        },
        buttons: {
          filter: "Aplicar Filtro",
        },
        searchPlaceholder: "Buscar...",
      },
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción",
        },
        toasts: {
          deleted: "Lista eliminada con éxito!",
          deletedAll: "¡Todas las listas fueron eliminadas con éxito!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Eliminar Todos",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
          deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "No hay notificaciones.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sin adjunto",
        confirmationModal: {
          deleteTitle: "Eliminación",
          deleteMessage: "¡Esta acción es irreversible! ¿Deseas continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "¡Atajo agregado con éxito!",
          deleted: "¡Atajo eliminado con éxito!",
        },
        dialog: {
          title: "Mensaje Rápido",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir visión",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del Archivo",
          status: "Estado",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Deseas importar los contactos de esta hoja de cálculo?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Estado",
          scheduledAt: "Programación",
          completedAt: "Completada",
          confirmation: "Confirmación",
          actions: "Acciones",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo Lectura",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Programación",
            confirmation: "Confirmación",
            contactList: "Lista de Contactos",
            tagList: "Lista de Etiquetas",
            fileList: "Lista de Archivos",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Envíos",
            restart: "Reiniciar Envíos",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
        },
      },
      announcements: {
        active: "Activo",
        inactive: "Inactivo",
        title: "Anuncios",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo Anuncio",
          contactLists: "Listas de Anuncios",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición de Anuncio",
          add: "Nuevo Anuncio",
          update: "Editar Anuncio",
          readonly: "Solo Lectura",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          id: "ID",
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Acciones",
          orderQueue: "Orden de la fila (bot)",
        },
        buttons: {
          add: "Agregar fila",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Las atenciones de esta fila seguirán existiendo, pero no tendrán ninguna fila asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
        withoutQueue: "Sin fila",
      },
      users: {
        title: "Usuarios",
        table: {
          id: "ID",
          name: "Nombre",
          email: "Correo electrónico",
          profile: "Perfil",
          rating: "Evaluación",
          queues: "Filas",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar usuario",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario se moverán a la fila.",
        },
      },
      helps: {
        title: "Centro de Ayuda",
      },
      schedules: {
        title: "Programaciones",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta Programación?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Programación",
          sentAt: "Fecha de Envío",
          status: "Estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Programación",
        },
        toasts: {
          deleted: "Programación eliminada con éxito.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta Etiqueta?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros etiquetados",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        },
      },
      settings: {
        success: "Configuraciones guardadas con éxito.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Creación de usuario",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Regresar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Reabre o acepta este ticket para enviar un mensaje.",
        signMessage: "Firmar",
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con archivo",
          extraValue: "Valor de la opción",
        },
        success: "¡Lista de archivos guardada con éxito!",
      },
      ticketOptionsMenu: {
        schedule: "Programación",
        delete: "Eliminar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Ingresa aquí la información que deseas registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket del contacto",
          message:
            "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        reply: "Responder",
        edit: "Editar",
        forward: "Reenviar",
        toForward: "Reenviar",
        confirmationModal: {
          title: "¿Eliminar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Verifica la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no se ha inicializado. Verifica la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifica la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudo descargar el medio de WhatsApp. Verifica la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Por favor, intenta nuevamente.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Verifica la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicia sesión.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuarios ha sido deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhatsApp, tal vez sea muy antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una fila.",
      },
    },
  },
};

export { messages };
