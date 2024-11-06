import { AnsiColors } from './ansiColors.enum';
import { environment } from '../config/environment';

const spamProcessMessages = {
    start: `[${AnsiColors.MAGENTA}SPAM${AnsiColors.WHITE}] Iniciando proceso de spam${AnsiColors.RESET}`,
    stop: `[${AnsiColors.MAGENTA}SPAM${AnsiColors.WHITE}] Pausando proceso de spam${AnsiColors.RESET}`,
    clear: `[${AnsiColors.MAGENTA}SPAM${AnsiColors.WHITE}] Limpiando proceso de spam${AnsiColors.RESET}`,
    info: (username: string, seconds: number) =>
        `[${AnsiColors.MAGENTA}SPAM${AnsiColors.WHITE}] user: ${username} - time ${seconds}s${AnsiColors.RESET}`,
    notUser: `[${AnsiColors.MAGENTA}SPAM${AnsiColors.WHITE}][${AnsiColors.RED}ERROR${AnsiColors.WHITE} No existe usuario${AnsiColors.RESET}`,
};

export const InfoMessages = {
    botReady: (tag: string) => `Bot conectado como ${AnsiColors.GREEN}${tag}${AnsiColors.RESET}`,
    botShutdown: `${AnsiColors.GREEN}${environment.bot.FULL_NAME}${AnsiColors.WHITE} se retira${AnsiColors.RESET}`,
    userNotFound: `${AnsiColors.RED}No se pudo encontrar al usuario. Asegúrate de que el ID es correcto.${AnsiColors.RESET}`,
    messageSendedToUser: (username: string, content: string) =>
        `${AnsiColors.GREEN}${environment.bot.NAME}${AnsiColors.WHITE} -> ${AnsiColors.CYAN}${username}: ${AnsiColors.GRAY}${content}${AnsiColors.RESET}`,
    messageReceivedFromUser: (username: string, content: string) =>
        `${AnsiColors.CYAN}${username}: ${AnsiColors.GRAY}${content}${AnsiColors.RESET}`,
    spamProcess: spamProcessMessages,
};
