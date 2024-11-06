import { CommandFlag } from '../../types/commands.types';

export function getFlagsFromArgsList(args: string[]): [string[], CommandFlag] {
    const nonFlags: string[] = [];
    const flags: CommandFlag = {};

    while (args.length !== 0) {
        const arg = args.shift();

        if (!arg) break;

        if (arg.startsWith('-')) {
            const value = args.shift();
            flags[arg] = null;

            if (!value) continue;

            if (value.startsWith('-')) {
                args.unshift(value);
                continue;
            }

            flags[arg] = value;
        } else {
            nonFlags.push(arg);
        }
    }

    return [nonFlags, flags];
}
