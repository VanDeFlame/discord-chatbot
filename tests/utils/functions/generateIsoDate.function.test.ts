import { generateIsoDate, generateOnlyDate } from '../../../src/utils/functions/dateUtils.function';

describe('dateUtils', () => {
    describe('generateIsoDate', () => {
        it('should return a date in ISO format', () => {
            const isoDate = generateIsoDate();
            expect(isoDate).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
        });
    });

    describe('generateOnlyDate', () => {
        it('should return only the date in YYYY-MM-DD format', () => {
            const onlyDate = generateOnlyDate();
            expect(onlyDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        });

        it('should match the date portion of generateIsoDate', () => {
            const isoDate = generateIsoDate();
            const onlyDate = generateOnlyDate();
            expect(onlyDate).toBe(isoDate.slice(0, 10));
        });
    });
});
