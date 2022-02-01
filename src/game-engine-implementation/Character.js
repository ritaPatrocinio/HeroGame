export default class Character {
    health;
    level;
    hitDamage;
    maxHealth;
    isDead;

    constructor(level) {
        this.level = level;
        this.isDead = false;
    }

    attack(character) {

    }

    takeAHit(damage) {
        this.health = this.health - damage
    }

    die() {
        if(this.health > 0) {
            this.isDead = false;
        } 
        else {
            this.isDead = true;
        }
    }
}