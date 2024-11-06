require('dotenv').config();

export const environment = {
    bot: {
        NAME: String(process.env.DISCORD_BOT_NAME),
        FULL_NAME: String(process.env.DISCORD_BOT_FULL_NAME),
    },
    TOKEN: String(process.env.DISCORD_TOKEN),
    DEV_ID: String(process.env.DEVELOPER_ID),
};
