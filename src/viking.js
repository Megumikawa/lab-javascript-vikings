// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.attack = this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  attack(){
    return this.attack = this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } 
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage) {
    this.health -= damage
    if( this.health > 0 ) {
      return `A Saxon has received ${damage} points of damage`
    } 
    return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj)
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
  }

  vikingAttack() {
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let chosenSaxon = this.saxonArmy[randomSaxon]

    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
    let chosenViking = this.vikingArmy[randomViking]
  
    let result = chosenSaxon.receiveDamage(chosenViking.strength)
    
    if(chosenSaxon.health <= 0) {
      this.saxonArmy.splice(randomViking, 1)
    }
    return result
  }

  saxonAttack() {
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
    let chosenViking = this.vikingArmy[randomViking]

    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let chosenSaxon = this.saxonArmy[randomSaxon]

    let result = chosenViking.receiveDamage(chosenSaxon.strength)

    if(chosenViking.health <= 0) {
      this.vikingArmy.splice(randomSaxon, 1)
    }
    return result
  }
}
  
