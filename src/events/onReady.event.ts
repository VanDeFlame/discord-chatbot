import { Client, User } from 'discord.js';
import { environment } from '../config/environment';
import { InfoMessages } from '../enums/infoMessages.enum';
import { Logger } from '../services/logger.service';
import { sendJavascriptMessageToAnUserInLoop } from '../utils/functions/sendMessagesToAnUser.function';

export async function onReadyEvent(client: Client<true>): Promise<void> {
    Logger.info(InfoMessages.botReady(client.user.tag));

    const user = await client.users.fetch(environment.USER_ID);
    if (user) {
        sendJavascriptMessageToAnUserInLoop(user);
        // sendRandomMessageToAnUserInLoop(user);
    } else {
        Logger.warn(InfoMessages.userNotFound);
    }
}
