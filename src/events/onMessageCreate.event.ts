import { ChannelType, Message } from 'discord.js';
import { InfoMessages } from '../enums/infoMessages.enum';
import { handleAdminCommands } from '../handlers/handleAdminCommands.handler';
import { Logger } from '../services/logger.service';
import { generateIsoDate } from '../utils/functions/dateUtils.function';

export function onMessageCreateEvent(message: Message) {
    const isDirectMessage = message.channel.type === ChannelType.DM;

    if (handleAdminCommands(message) !== 1) {
        return;
    }

    const msgContent = message.content;

    if (!message.author.bot && isDirectMessage) {
        const username = message.author.username;
        const logMessage = `${generateIsoDate()} - ${username}: ${msgContent}\n`;

        Logger.info(InfoMessages.messageReceivedFromUser(username, msgContent));
        Logger.save(`messages/${username}.txt`, logMessage);
    }
}
