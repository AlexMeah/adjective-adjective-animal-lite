const generate = require('..');

const lists = require('../lib/lists')

describe('Generate', () => {
    it('should generate adjective-adjective-animal by default', () => {
        const str = generate();
        const parts = str.split('-');

        expect(lists.adjectives).toContain(parts[0]);
        expect(lists.adjectives).toContain(parts[1]);
        expect(lists.animals).toContain(parts[2]);
    });

    it('should generate with a custom number of adjectives', () => {
        const str = generate(4);
        const parts = str.split('-');

        expect(lists.adjectives).toContain(parts[0]);
        expect(lists.adjectives).toContain(parts[1]);
        expect(lists.adjectives).toContain(parts[2]);
        expect(lists.adjectives).toContain(parts[3]);
        expect(lists.animals).toContain(parts[4]);
    });
});