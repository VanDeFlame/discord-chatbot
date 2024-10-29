import { Message, MessageCreateOptions, MessagePayload, User } from 'discord.js';
import { InfoMessages } from '../../enums/infoMessages.enum';
import { Logger } from '../../services/logger.service';

type PropMessage = string | MessagePayload | MessageCreateOptions;

export async function sendDirectMessageToAnUser(
    user: User,
    message: PropMessage,
): Promise<Message<false>> {
    if (!user.dmChannel) {
        user.createDM();
    }

    const sendedMessage = await user.send(message);

    const logMessage = InfoMessages.messageSendedToUser(user.username, sendedMessage.content);
    Logger.info(logMessage);

    return sendedMessage;
}
