import { Message } from 'discord.js';
import { environment } from '../config/environment';
import { AdminExecutionsEnum } from '../enums/commands.enum';
import { shutdownProcess } from '../process/shutdown.process';
import { spamProcess } from '../process/spam.process';
import { Logger } from '../services/logger.service';
import { splitStringBySpacesButPreserveQuotedPhrases } from '../utils/functions/splitStringBySpacesButPreserveQuotedPhrases.function';

export function handleAdminCommands(message: Message) {
    if (message.author.id !== environment.DEV_ID) {
        return 1;
    }

    const msgContent = message.content;
    const msgArgs = splitStringBySpacesButPreserveQuotedPhrases(msgContent);

    if (msgArgs.shift()?.toUpperCase() === '$EXEC') {
        handleExecutions(msgArgs);
    }
}

function handleExecutions(msgArgs: string[]) {
    switch (msgArgs.shift()?.toUpperCase()) {
        case AdminExecutionsEnum.shutdown:
            shutdownProcess();
            break;
        case AdminExecutionsEnum.spam:
            spamProcess(msgArgs).catch(Logger.error);
            break;
        default:
            break;
    }
}
