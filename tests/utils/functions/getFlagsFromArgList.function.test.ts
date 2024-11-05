import { getFlagsFromArgsList } from '../../../src/utils/functions/getFlagsFromArgsList.function';

describe('getFlagsFromArgsList', () => {
    it('should return empty arrays for both flags and non-flags when the input is an empty array', () => {
        const args: string[] = [];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toHaveLength(0);
        expect(flags).toEqual({});
    });

    it('should return an empty flags object and populate nonFlags with arguments that do not start with "-"', () => {
        const args = ['arg1', 'arg2', 'arg3'];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toEqual(['arg1', 'arg2', 'arg3']);
        expect(flags).toEqual({});
    });

    it('should parse flags with values', () => {
        const args = ['-a', 'valueA', '-b', 'valueB'];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toHaveLength(0);
        expect(flags).toEqual({
            '-a': 'valueA',
            '-b': 'valueB',
        });
    });

    it('should handle flags without values and assign them null', () => {
        const args = ['-a', '-b', 'valueB'];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toHaveLength(0);
        expect(flags).toEqual({
            '-a': null,
            '-b': 'valueB',
        });
    });

    it('should handle mixed flags and non-flags correctly', () => {
        const args = ['arg1', '-a', 'valueA', 'arg2', '-b', 'valueB', 'arg3', '-c'];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toEqual(['arg1', 'arg2', 'arg3']);
        expect(flags).toEqual({
            '-a': 'valueA',
            '-b': 'valueB',
            '-c': null,
        });
    });

    it('should handle consecutive flags without values', () => {
        const args = ['-a', '-b', '-c'];
        const [nonFlags, flags] = getFlagsFromArgsList(args);
        expect(nonFlags).toHaveLength(0);
        expect(flags).toEqual({
            '-a': null,
            '-b': null,
            '-c': null,
        });
    });
});
