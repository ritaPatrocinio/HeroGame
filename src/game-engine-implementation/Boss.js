import Character from './Character';

export default class Boss extends Character {
    constructor(level) {
        super(level);
        this.hitDamage = 70*level;
        this.maxHealth = 130*level;
        this.health = this.maxHealth;
        this.isDead = false;
        this.name = 'boss';
    }
}
