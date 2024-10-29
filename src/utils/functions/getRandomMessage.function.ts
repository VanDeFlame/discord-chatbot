import { messageList } from '../messageList';

export function getRandomMessage(): string {
    const index = Math.floor(Math.random() * messageList.length);
    return messageList[index];
}
