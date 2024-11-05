import { splitStringBySpacesButPreserveQuotedPhrases } from '../../../src/utils/functions/splitStringBySpacesButPreserveQuotedPhrases.function';

// Duplicate tests may exist
describe('splitStringBySpacesButPreserveQuotedPhrases', () => {
    it('should return an empty array when the input is an empty string', () => {
        const message = ``;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toHaveLength(0);
    });

    it('should return a single word in an array when the input is a single word', () => {
        const message = `Hello`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`Hello`]);
    });

    it('should split a sentence into words separated by spaces', () => {
        const message = `Hello World`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`Hello`, `World`]);
    });

    it('should keep phrases within double quotes as a single element', () => {
        const message = `My phrase is "Hello World"`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`My`, `phrase`, `is`, `Hello World`]);
    });

    it('should not merge words if escaped double quotes are used instead of actual quotes', () => {
        const message = `My phrase is \\"Hello World\\"`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`My`, `phrase`, `is`, `"Hello`, `World"`]);
    });

    it('should treat single quotes as regular characters and not merge words', () => {
        const message = `My phrase is 'Hello World'`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`My`, `phrase`, `is`, `Hello World`]);
    });

    it('should treat escaped single quotes as regular characters and not merge words', () => {
        const message = `My phrase is \\'Hello World\\'`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`My`, `phrase`, `is`, `'Hello`, `World'`]);
    });

    it('should preserve punctuation inside quoted phrases', () => {
        const message = `My phrase? It's "Hello, World!"`;
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toStrictEqual([`My`, `phrase?`, `It's`, `Hello, World!`]);
    });
    it('should return an empty array when the input is an empty string', () => {
        const message = '';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toHaveLength(0);
    });

    it('should split by spaces when there are no quotes', () => {
        const message = 'this is a test';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', 'a', 'test']);
    });

    it('should preserve phrases enclosed in double quotes', () => {
        const message = 'this is "a test with quotes"';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', 'a test with quotes']);
    });

    it('should preserve phrases enclosed in single quotes', () => {
        const message = "this is 'a test with quotes'";
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', 'a test with quotes']);
    });

    it('should handle both single and double quotes in the same string', () => {
        const message = '\'a test\' and "another test"';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['a test', 'and', 'another test']);
    });

    it('should handle words with escaped quotes', () => {
        const message = 'this has an \\"escaped quote\\"';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'has', 'an', '"escaped', 'quote"']);
    });

    it('should handle empty phrases in double quotes', () => {
        const message = 'this is ""';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', '']);
    });

    it('should handle empty phrases in single quotes', () => {
        const message = "this is ''";
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', '']);
    });

    it('should handle consecutive quoted phrases', () => {
        const message = '"first phrase" "second phrase"';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['first phrase', 'second phrase']);
    });

    it('should handle nested quotes as regular text', () => {
        const message = '"a \'nested\' phrase"';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(["a 'nested' phrase"]);
    });

    it('should handle phrases with special characters', () => {
        const message = '"phrase #1" and \'phrase #2\'';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['phrase #1', 'and', 'phrase #2']);
    });

    it('should handle unclosed quotes as regular words', () => {
        const message = 'this is "an unclosed';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', '"an', 'unclosed']);
    });

    it('should handle multiple spaces between words', () => {
        const message = 'this    is     a test';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', 'a', 'test']);
    });

    it('should ignore leading and trailing spaces', () => {
        const message = '  this is "a test"   ';
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['this', 'is', 'a test']);
    });

    it('should handle escaped characters along with regular text', () => {
        const message = "word \\'escaped\\' and another word";
        const response = splitStringBySpacesButPreserveQuotedPhrases(message);
        expect(response).toEqual(['word', "'escaped'", 'and', 'another', 'word']);
    });
});
