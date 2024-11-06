import { getUserById } from '../discord/actions/getUserById.function';
import { SpamService } from '../services/spam.service';
import { CommandFlag } from '../types/commands.types';
import { getFlagsFromArgsList } from '../utils/functions/getFlagsFromArgsList.function';

export function spamProcess(args: string[]) {
    const [nonFlags, flags] = getFlagsFromArgsList(args);

    const spamService = SpamService.getInstance();

    switch (nonFlags[0]?.toUpperCase()) {
        case 'STOP':
            spamService.stop();
            break;
        case 'PAUSE':
            spamService.stop();
            break;
        case 'CLEAR':
            spamService.clear();
            break;
        case 'RESUME':
            spamService.start();
            break;
        case 'START':
            setPropertiesOnFlags(flags).then(() => spamService.start());
            break;
        default:
            setPropertiesOnFlags(flags);
            break;
    }
}

async function setPropertiesOnFlags(flags: CommandFlag) {
    const spamService = SpamService.getInstance();
    const userFlag = flags['-u'] ?? flags['--user'];
    if (userFlag) {
        const user = await getUserById(userFlag);
        if (user) spamService.user = user;
    }

    const messageFlag = flags['-m'] ?? flags['--message'];
    if (messageFlag) spamService.message = messageFlag;

    spamService.timeGapSeconds = Number(flags['-t'] ?? flags['--time']);
}
