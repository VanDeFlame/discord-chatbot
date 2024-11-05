import { InfoMessages } from '../enums/infoMessages.enum';
import { Logger } from '../services/logger.service';

export function shutdownProcess() {
    Logger.info(InfoMessages.botShutdown);
    process.exit(0);
}
