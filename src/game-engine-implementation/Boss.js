import Character from './Character';
import { Config } from './GamePlay';

export default class Boss extends Character {
    constructor(level) {
        super(level);
        this.hitDamage = Config.boss.hitDamage*level;
        this.maxHealth = Config.boss.maxHealth*level;
        this.health = this.maxHealth;
        this.isDead = false;
        this.name = 'boss';
    }
}
