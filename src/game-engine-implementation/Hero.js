import Character from './Character';

export default class Hero extends Character {
    experience;
    lifes;

    constructor(level) {
        super(level);
        this.experience = 0;
        this.lifes = 2;
        this.hitDamage = 50*level;
        this.maxHealth = 100*level;
        this.health = this.maxHealth;
        this.isDead = false;
        this.name = 'hero';
    }
}
