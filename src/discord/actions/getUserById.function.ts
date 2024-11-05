import { User } from 'discord.js';
import { client } from '../../config/discordClient';
import { InfoMessages } from '../../enums/infoMessages.enum';
import { Logger } from '../../services/logger.service';

export async function getUserById(userId: string): Promise<User | null> {
    const user = await client.users.fetch(userId);
    if (!user) {
        Logger.warn(InfoMessages.userNotFound);
        return null;
    }
    return user;
}
