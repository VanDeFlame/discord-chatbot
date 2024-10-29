import { User } from 'discord.js';
import { getJavascriptPhrase } from './getJavascriptPhrase.function';
import { getRandomMessage } from './getRandomMessage.function';
import { sendDirectMessageToAnUser } from './sendDirectMessageToAnUser.function';
import { environment } from '../../config/environment';
import { Logger } from '../../services/logger.service';

export function sendRandomMessageToAnUserInLoop(user: User): void {
    setInterval(() => {
        const msgToSend = getRandomMessage();
        sendDirectMessageToAnUser(user, msgToSend).catch(Logger.error);
    }, environment.INTERVAL);
}

export function sendJavascriptMessageToAnUserInLoop(user: User): void {
    const intervalId = setInterval(() => {
        const msgToSend = getJavascriptPhrase();

        if (!msgToSend) {
            clearInterval(intervalId);
            return;
        }

        sendDirectMessageToAnUser(user, msgToSend).catch(Logger.error);
    }, environment.INTERVAL);
}
