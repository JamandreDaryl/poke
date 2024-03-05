console.log("Hello World");
function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = 0.5 * level;

    // Method to tackle another Pokemon
    this.tackle = function(target) {
        if (this.health > 0 && target.health > 0) {
            console.log(this.name + ' tackles ' + target.name);
            let damage = this.attack;
            target.health -= damage;
            console.log(target.name + "'s health is now reduced to " + target.health);
        } else {
            console.log("One of the Pokemon has fainted. The battle cannot continue.");
        }
    };

    // Method to handle fainting of a Pokemon
    this.faint = function() {
        console.log(this.name + ' fainted');
    };
}

// Trainer object
let trainer = {
    name: "Daryl",
    age: 19,
    trainerInfo: function() {
        console.log("Trainer Name: " + this.name);
        console.log("Trainer Age: " + this.age);
    }
};

// Instantiate two Pokemon using the constructor function
let pikachu = new Pokemon('Pikachu', 16);
let rattata = new Pokemon('Rattata', 8);

// Call trainerInfo method to display trainer's information
trainer.trainerInfo();
console.log("A wild Rattata has appeared!");
console.log( trainer.name + " summoned Pikachu!");

// Battle until one Pokémon faints
while (pikachu.health > 0 && rattata.health > 0) {
    pikachu.tackle(rattata);
    rattata.tackle(pikachu);
}

// Determine the winner
if (pikachu.health <= 0) {
    console.log("Rattata won the battle!");
} else {
    console.log("Pikachu won the battle!");
}
