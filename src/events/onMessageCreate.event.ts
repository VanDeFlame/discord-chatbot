import { ChannelType, Message } from 'discord.js';
import { environment } from '../config/environment';
import { InfoMessages } from '../enums/infoMessages.enum';
import { Logger } from '../services/logger.service';
import { generateIsoDate } from '../utils/functions/dateUtils.function';

const STOP_PHRASE = 'SHUTDOWN';

export function onMessageCreateEvent(message: Message) {
    const isDirectMessage = message.channel.type === ChannelType.DM;
    const isDeveloper = message.author.id === environment.DEV_ID;

    const msgContent = message.content;

    if (isDeveloper && msgContent === STOP_PHRASE) {
        Logger.info(InfoMessages.botShutdown);
        process.exit(0);
    }

    if (message.author.id === environment.USER_ID && isDirectMessage) {
        const username = message.author.username;
        const logMessage = `${generateIsoDate()} - ${username}: ${msgContent}\n`;

        Logger.info(InfoMessages.messageReceivedFromUser(username, msgContent));
        Logger.save(`messages/${username}.txt`, logMessage);
    }
}
