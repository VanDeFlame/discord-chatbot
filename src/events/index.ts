import { Client, Events } from 'discord.js';
import { onMessageCreateEvent } from './onMessageCreate.event';
import { onReadyEvent } from './onReady.event';

export function setEvents(client: Client<true>): void {
    client.once(Events.ClientReady, onReadyEvent);

    client.on(Events.MessageCreate, onMessageCreateEvent);
}
