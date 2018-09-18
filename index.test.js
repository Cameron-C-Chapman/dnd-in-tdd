const Character = require('./Character');

describe('Create a character.', () => {
    test('Character class is defined.', () => {
        let character = new Character();
        expect(character).toBeDefined();
    });

    test('Character can set and get name.', () => {
        let character = new Character('Knightcrawler');
        expect(character.name).toEqual('Knightcrawler');
    });

    test('Character can set and get alignment.', () => {
        let character = new Character('Knightcrawler', 'Good');
        expect(character.alignment).toEqual('Good');
    });

    test('Character does not set an invalid alignment.', () => {
        let character = new Character('Knightcrawler', 'Bogus');
        expect(character.alignment).toBeUndefined();
    });

    test('Character hp defaults to 5.', () => {
        let character = new Character('Knightcrawler', 'Good');
        expect(character.hp).toEqual(5);
    });

    test('Character armor class defaults to 10.', () => {
        let character = new Character('Knightcrawler', 'Good');
        expect(character.armor).toEqual(10);
    });

    test('Character can attack.', () => {
        let character = new Character('Knightcrawler', 'Good');
        expect(character.attack).toBeDefined();
    });

    test('Character wins attack if roll is higher than opponents armor class.', () => {
        let good = new Character('Knightcrawler', 'Good');
        let evil = new Character('Evil Knightcrawler', 'Evil');
        expect(good.attack(20, evil)).toBeTruthy();
    });

    test('Character loses attack if roll is higher than opponents armor class.', () => {
        let good = new Character('Knightcrawler', 'Good');
        let evil = new Character('Evil Knightcrawler', 'Evil');
        expect(good.attack(1, evil)).toBeFalsy();
    });

    test('Character takes damage from opponent when attack is successful.', () => {
        let good = new Character('Knightcrawler', 'Good');
        let evil = new Character('Evil Knightcrawler', 'Evil');
        let evilInitialHitPoints = evil.hp;
        good.attack(19, evil);
        expect(evil.hp).toEqual( (evilInitialHitPoints - 1) );
    });

    test('Character takes double damage from opponent when attack is successful and dice roll was 20.', () => {
        let good = new Character('Knightcrawler', 'Good');
        let evil = new Character('Evil Knightcrawler', 'Evil');
        let evilInitialHitPoints = evil.hp;
        good.attack(20, evil);
        expect(evil.hp).toEqual( (evilInitialHitPoints - 2) );
    });

    test('Character dies when hit points reach 0.', () => {
        let good = new Character('Knightcrawler', 'Good');
        let evil = new Character('Evil Knightcrawler', 'Evil');
        let evilInitialHitPoints = evil.hp;
        good.attack(20, evil);
        good.attack(20, evil);
        good.attack(19, evil);
        expect(evil.isDead).toBeTruthy();
    });




});
