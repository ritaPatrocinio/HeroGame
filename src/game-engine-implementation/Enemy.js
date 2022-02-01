import Character from './Character';

export default class Enemy extends Character {
    constructor(level) {
        super(level);
        this.hitDamage = 15*level;
        this.maxHealth = 30*level;
        this.health = this.maxHealth;
        this.isDead = false;
        this.name = 'enemy';
    }
}
