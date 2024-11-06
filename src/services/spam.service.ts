import { User } from 'discord.js';
import { Logger } from './logger.service';
import { sendDirectMessageToAnUser } from '../discord/actions/sendDirectMessageToAnUser.function';
import { InfoMessages } from '../enums/infoMessages.enum';
import { getRandomMessage } from '../utils/functions/getRandomMessage.function';

export class SpamService {
    private static instance: SpamService;
    private _user: User | null = null;
    private _intervalId: NodeJS.Timeout | null = null;
    private _timeGapMs: number = 60 * 1000;
    private _message: string | null = null;

    /* PRIVATE CONSTRUCTOR FOR SINGLETON */
    private constructor() {}

    public static getInstance(): SpamService {
        this.instance ??= new SpamService();
        return this.instance;
    }

    /* SETTERS */
    public set user(user: User) {
        this._user = user;
    }
    public set timeGapMs(ms: number) {
        if (!isNaN(ms)) this._timeGapMs = ms;
    }
    public set timeGapSeconds(seconds: number) {
        this.timeGapMs = seconds * 1000;
    }
    public set timeGapMinutes(minutes: number) {
        this.timeGapMs = minutes * 60000;
    }

    public set message(message: string) {
        this._message = message;
    }

    /* GETTERS */
    public get user(): User | null {
        return this._user;
    }
    public get message(): string {
        return this._message ?? getRandomMessage();
    }

    /* METHODS */
    public start(): void {
        Logger.info(InfoMessages.spamProcess.start);
        if (!this.user) {
            Logger.error(InfoMessages.spamProcess.notUser);
            return;
        }

        Logger.info(InfoMessages.spamProcess.info(this.user.username, this.timeGapSeconds));

        this._intervalId = setInterval(async () => {
            if (!this.user) return;
            await sendDirectMessageToAnUser(this.user, this.message).catch(Logger.error);
        }, this._timeGapMs);
    }
    public stop(): void {
        Logger.info(InfoMessages.spamProcess.stop);
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }
    public clear(): void {
        Logger.info(InfoMessages.spamProcess.clear);
        this.stop();
        this._user = null;
        this._timeGapMs = 60000;
        this._message = null;
    }
}
