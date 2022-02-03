import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        super(level);
        this.hitDamage = Config.enemy.hitDamage*level;
        this.maxHealth = Config.enemy.maxHealth*level;
        this.health = this.maxHealth;
        this.isDead = false;
        this.name = 'enemy';
    }
}
