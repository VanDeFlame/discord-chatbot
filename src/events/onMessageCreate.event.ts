import { ChannelType, Message } from 'discord.js';
import { environment } from '../config/environment';
import { InfoMessages } from '../enums/infoMessages.enum';
import { handleAdminCommands } from '../handlers/handleAdminCommands.handler';
import { Logger } from '../services/logger.service';
import { generateIsoDate } from '../utils/functions/dateUtils.function';

export function onMessageCreateEvent(message: Message) {
    const isDirectMessage = message.channel.type === ChannelType.DM;

    if (!handleAdminCommands(message)) {
        return;
    }

    const msgContent = message.content;

    if (message.author.id === environment.USER_ID && isDirectMessage) {
        const username = message.author.username;
        const logMessage = `${generateIsoDate()} - ${username}: ${msgContent}\n`;

        Logger.info(InfoMessages.messageReceivedFromUser(username, msgContent));
        Logger.save(`messages/${username}.txt`, logMessage);
    }
}
