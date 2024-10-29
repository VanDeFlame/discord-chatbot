require('dotenv').config();

export const environment = {
    bot: {
        NAME: String(process.env.DISCORD_BOT_NAME),
        FULL_NAME: String(process.env.DISCORD_BOT_FULL_NAME),
    },
    TOKEN: String(process.env.DISCORD_TOKEN),
    USER_ID: String(process.env.USER_ID), // ID del usuario al que quieres enviar mensajes
    DEV_ID: String(process.env.DEVELOPER_ID),
    INTERVAL: 1 * 5 * 1000, // Intervalo de tiempo en milisegundos (ejemplo: 60000 ms = 1 minuto)
};
