import fs from 'fs';
import { AnsiColors } from '../enums/ansiColors.enum';
import { generateIsoDate, generateOnlyDate } from '../utils/functions/dateUtils.function';

export class Logger {
    private static readonly logsFolder: string = './logs';

    public static info(message?: any, ...optionalParams: any[]): void {
        console.info(message, ...optionalParams);
    }

    public static warn(message?: any, ...optionalParams: any[]): void {
        console.warn(message, ...optionalParams);
    }

    public static error(message?: any, ...optionalParams: any[]): void {
        console.error(message, ...optionalParams);
    }

    public static errorAndSave(message?: any, ...optionalParams: any[]): void {
        this.error(message, ...optionalParams);

        const content = `[${generateIsoDate()}] ${message}\n${optionalParams.join('\n\t')}`;
        this.save(`errors/${generateOnlyDate()}.txt`, content);
    }

    public static save(filename: string, content: string) {
        const filepath = `${this.logsFolder}/${filename}`;

        fs.appendFile(filepath, content, (err: any) => {
            if (!err) return;
            this.error(`${AnsiColors.RED}Error while saving logs:${AnsiColors.RESET}\n${err}`, false);
        });
    }
}
