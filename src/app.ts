import { client } from './config/discordClient';
import { environment } from './config/environment';
import { setEvents } from './events';

setEvents(client);

client.login(environment.TOKEN);
