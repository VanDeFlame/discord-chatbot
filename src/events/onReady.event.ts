import { Client } from 'discord.js';
import { InfoMessages } from '../enums/infoMessages.enum';
import { Logger } from '../services/logger.service';

export async function onReadyEvent(client: Client<true>): Promise<void> {
    Logger.info(InfoMessages.botReady(client.user.tag));
}
