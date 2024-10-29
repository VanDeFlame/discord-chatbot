import { getRandomMessage } from '../../../src/utils/functions/getRandomMessage.function';
import { messageList } from '../../../src/utils/messageList';

describe('getRandomMessage', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should return a message from the messageList', () => {
        const message = getRandomMessage();
        expect(messageList).toContain(message);
    });

    it('should return the first message when Math.random() returns 0', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0);
        const message = getRandomMessage();
        expect(message).toBe(messageList[0]);
    });

    it('should return the last message when Math.random() returns close to 1', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.9999); // close to 1
        const message = getRandomMessage();
        expect(message).toBe(messageList[messageList.length - 1]);
    });
});
