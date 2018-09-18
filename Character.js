module.exports = class Character {
     
    constructor(name, alignment) {
        const ALIGNMENTS = ['Good', 'Neutral', 'Evil'];
        const DEFAULT_HP = 5;
        const DEFAULT_ARMOR = 10;

        this.name = name;

        if (ALIGNMENTS.includes(alignment)) {
            this.alignment = alignment;
        } else {
            console.error(`${alignment} is not a valid character alignment.`);
        }

        this.hp = DEFAULT_HP;
        this.armor = DEFAULT_ARMOR;
        this.isDead = false;
        
    }

    attack(diceRoll, opponent) {
        let damage = 1;
        if (diceRoll > opponent.armor) {
            if (diceRoll === 20) {
                damage = (damage * 2);
            }
            opponent.hp -= damage;
            opponent.isDead = this.isOpponentDead(opponent);
            return true;
        }

        return false;
    }

    isOpponentDead(opponent) {
        if (opponent.hp <= 0) {
            return true;
        }

        return false;
    }

}