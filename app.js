const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

//Exercise 1//============
// console.dir(pokemon, { maxArrayLength: null })

console.log(pokemon[58].name)

// exercise 2//==========

// console.log(game)

//exercise 3//===========

game.difficulty = 'easy'

console.log(game.difficulty)

//exercise 4//============

game.party.push(pokemon[24]) //index starts at zero so to call an object from the array minus 1 for number
console.dir(game.party) //works//

//exercise 5//============

game.party.push(pokemon[43], pokemon[53], pokemon[62])

//exercise 6//=============

//if difficulty is less than 3 change completed to true//

  game.gyms.forEach(gym => {
    if (gym.difficulty <= 3) {
      gym.completed = true;
    }
  })

console.dir(game.gyms)


// exercise 7//============

game.party.splice (0, 1, pokemon[25])
game.party.splice (1, 1, pokemon[44])
game.party.splice (2, 1, pokemon[54])
game.party.splice (3, 1, pokemon[63])

// exercise 8//=============

game.party.forEach(pokemon => {
  console.dir(pokemon.name)
})


// exercise 9//===============


pokemon.forEach(pokemon => {
  if (pokemon.starter= true) {
    console.dir(pokemon.name)
  }
})
// not sure why all pokemon are printing

//exercise 10//================

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[8])

//exercise 11//

// game.catchPokemon = function(pokemonObj) {
//    game.party.push(pokemonObj) {
//     items.name = 'pokeball'{
//       items.name.quantity(--1)
//     }
//   }
// };
// could  not figure out how to add extra function within another

//exercise 12//================

game.gyms.forEach(gym => {
  if (gym.difficulty <= 6) {
    gym.completed = true;
  }
})

//exercise 13//==========

// game.gymStatus = function(gymTally){
// let completedNum = `${0}`
// let incompleteNum = `${0}`
// const gymTally = (`'completed:${0} ', 'incomplete:${0} '`)
//   if (gym.completed)
// }


//exercise 14//===========

game.partyCount = function(){
  game.party
}
// needs to count and update number of pokemon in party//

//exercise 15//============

game.gyms.forEach(gym => {
  if (gym.difficulty <= 8) {
    gym.completed = true;
  }
})

//exercise 16// ===========
console.dir(game)