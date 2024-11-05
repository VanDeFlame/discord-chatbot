import { environment } from '../config/environment';
import { getUserById } from '../discord/actions/getUserById.function';
import { sendDirectMessageToAnUser } from '../discord/actions/sendDirectMessageToAnUser.function';
import { Logger } from '../services/logger.service';
import { getFlagsFromArgsList } from '../utils/functions/getFlagsFromArgsList.function';
import { getRandomMessage } from '../utils/functions/getRandomMessage.function';

let intervalId: NodeJS.Timeout | null = null;

export async function spamProcess(args: string[]) {
    const [nonFlags, flags] = getFlagsFromArgsList(args);

    if (intervalId) {
        clearInterval(intervalId);
        return;
    }
    if (nonFlags[0] === 'STOP') {
        return;
    }

    const userFlag = flags['-u'] ?? flags['--user'];
    if (!userFlag) return;

    const messageFlag = flags['-m'] ?? flags['--message'];
    const timeFlag = Number(flags['-t'] ?? flags['--time']);
    const intervalTime = isNaN(timeFlag) ? timeFlag * 1000 : environment.INTERVAL;

    const intervalUser = await getUserById(userFlag);
    if (!intervalUser) return;

    intervalId = setInterval(async () => {
        const intervalMessage = messageFlag ?? getRandomMessage();

        await sendDirectMessageToAnUser(intervalUser, intervalMessage).catch(Logger.error);
    }, intervalTime);
}
