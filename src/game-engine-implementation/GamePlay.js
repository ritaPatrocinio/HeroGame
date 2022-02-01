import Hero from './Hero';
import Enemy from './Enemy';
import Boss from './Boss';

export const Config = {
    hero: {
        maxHealth: 100,
        hitDamage: 50,
        experienceToNextLevel: 150
    },
    enemy: {
        maxHealth: 30,
        hitDamage: 15,
        experienceGiven: 50
    },
    boss: {
        maxHealth: 130,
        hitDamage: 70,
        experienceGiven: 100
    }
}

export default class GamePlay {
    static fight(firstCharacter, secondCharacter) {
        if(firstCharacter.name!== 'hero' && secondCharacter.name!== 'hero'){
            return
        }
        let attacker = firstCharacter; 
        let attacked = secondCharacter;
        while(firstCharacter.health > 0 && secondCharacter.health > 0){
            attacked.takeAHit(attacker.hitDamage);
            if(firstCharacter.health < 0){
                firstCharacter.health = 0
            }
            if(secondCharacter.health < 0){
                secondCharacter.health = 0
            }
            attacked = attacked === firstCharacter ? secondCharacter : firstCharacter;
            attacker = attacker === firstCharacter ? secondCharacter : firstCharacter;
        }
        let winner = firstCharacter.health > 0 ? firstCharacter : secondCharacter;
        let loser = firstCharacter.health === 0 ? firstCharacter : secondCharacter;
        if(winner.name === 'hero'){
            let experienceGained = 0;
            if(loser.name === 'boss'){
                winner.lifes++;
                experienceGained = Config.boss.experienceGiven*loser.level
                winner.experience += experienceGained;
            }
            else if(loser.name === 'enemy'){
                experienceGained = Config.enemy.experienceGiven*loser.level
                winner.experience += experienceGained;
            }
            let expToNextLevel = Config.hero.experienceToNextLevel* winner.level;
            if(experienceGained >= expToNextLevel){
                winner.level++;
                winner.hitDamage = Config.hero.hitDamage*level;
                winner.maxHealth = Config.hero.maxHealth*level;
            }
        }

}
}
