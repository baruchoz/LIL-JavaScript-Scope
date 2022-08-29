// ----------------------------------------------------------------
// INTRODUCTION
//----------------------------------------------------------------

/*
warrior = "Ninja"; // warrior is defined here
warrior3 = "Viking";

const screamWarrior = () => {
  let warrior2 = "Samurai";
  // wrapped in a function is now a closure
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);

var warrior; // warrior is declared here

var warrior3; //will show undefined

// console.log(warrior, warrior2);
*/

//----------------------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------------------
// Global variables are variables defined globally

/*
"use strict";
// use strict wont allow undeclared variables in local scope to be used globally

const warrior = {
  name: "Jujin Take",
  type: "Ninja",
  weapon: "Shuriken",
  agility: 79,
}; // this is globally scoped

// globally scoped
const screamWarrior = () => {
  let warrior2 = "Samurai";
  // warrior3 = "Viking"; // this is global scoped and cant be used with 'use strict' mode if not declared
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

// console.log(warrior, warrior3);
*/

/*
// --------------------------------
// GLOBAL VARIABLES CHALLENGE
// --------------------------------

// this array is globally scoped
const warriors = [
  {
    name: "Jujin Take",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 79,
  },
  {
    name: "Viggo Rusen",
    type: "Viking",
    weapon: "Swing blade",
    agility: 60,
  },
  {
    name: "Ro Rake",
    type: "Samurai",
    weapon: "Boken",
    agility: 82,
  },
];

// this functions is globally scoped
const screamWarriors = () => {
  return console.log(warriors);
};

// no issues running this function!
screamWarriors();

// -------------------------------
// MY RENDITION
// -------------------------------

const animeSeries = [
  {
    title: "Fullmetal Alchemist: Brotherhood",
    genre: "Shonen",
    seasons: 1,
  },
  {
    title: "One Piece",
    genre: "Shonen",
    seasons: 20,
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Shonen",
    seasons: 1,
  },
  {
    title: "Demon Slayer",
    genre: "Shonen",
    seasons: 3,
  },
];

const showanimeSeries = () => {
  console.log("Array of Anime Series objects:");
  return console.log(animeSeries);
};

showanimeSeries();
*/

//----------------------------------------------------------------
// LOCAL VARIABLES
//----------------------------------------------------------------
// Local Variables are variables defined in a function

/*
const screamWarrior = () => {
  var warrior1 = "Ninja";
  let warrior2 = "Samurai";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

const screamWarrior2 = () => {
  var warrior1 = "Viking";
  let warrior2 = "Soldier";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

console.log(screamWarrior2(), screamWarrior());

// warrior1 & warrior2 aren't available globally
// console.log(warrior1, warrior2);

// --------------------------------
// LOCAL VARIABLES CHALLENGE
// --------------------------------

// global variable
var numberOfPlatoon = 45;

const platoon = () => {
  // local variable
  let warriorsPerPlatoon = 60;

  // local as well
  let totalWarriors = numberOfPlatoon * warriorsPerPlatoon;

  return `Our army is ${totalWarriors} strong!`;
};

console.log(platoon());

// warriorsPerPlatoon & totalWarriors aren't available globally
// console.log(warriorsPerPlatoon, totalWarriors);
console.log(numberOfPlatoon);

// -------------------------------
// MY RENDITION
// -------------------------------
var units = 5;

const totalWarriors = () => {
  let warriorsPerUnit = 2000;
  let totalWarriors = warriorsPerUnit * units;
  return `There are ${totalWarriors} warriors in the army, divided amongst ${units} units.`;
};

console.log(totalWarriors());

console.log(units);
// warriorsPerUnit and totalWarriors arent available globally
// console.log(warriorsPerUnit, totalWarriors);
*/

//----------------------------------------------------------------
// BLOCK-SCOPED VARIABLES
//----------------------------------------------------------------

/*
let warrior1 = "Ninja";
const warrior2 = "Viking";
console.log(warrior1, warrior2);

// this will return an error
warrior1 = "Samurai";
console.log(warrior1);

const screamWarrior = () => {
  let warrior4 = "Canon shooter";
  if (warrior2 === "Viking") {
    let warrior3 = "Infantry Soldier";
    console.log(
      `Our army consists of ${warrior1}, ${warrior2} and ${warrior3}!`
    );
  }
  console.log(warrior4);
};

screamWarrior();

// console.log(warrior4);
*/

// --------------------------------
// BLOCK-SCOPED VARIABLES CHALLENGE
// --------------------------------

// global block-scoped variable
const warriors = [
  {
    name: "Jujin Take",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 79,
  },
  {
    name: "Viggo Rusen",
    type: "Viking",
    weapon: "Swing blade",
    agility: 60,
  },
  {
    name: "Ro Rake",
    type: "Samurai",
    weapon: "Boken",
    agility: 82,
  },
];

const screamWarriors = () => {
  // global variable warriors available
  console.log(warriors);

  warriors.map((warrior) => {
    if (warrior.agility === 60) {
      // block-scoped agility
      let agility = warrior.agility;
      console.log(
        `${warrior.name}, who is a ${warrior.type} has an agility of ${agility}`
      );
    }

    // block-scoped agility isn't available here
    // console.log(warrior.agility);
  });
};

screamWarriors();

// -------------------------------
// MY RENDITION
// -------------------------------

const animeSeries = [
  {
    title: "Fullmetal Alchemist: Brotherhood",
    genre: "Shonen",
    seasons: 1,
  },
  {
    title: "One Piece",
    genre: "Shonen",
    seasons: 20,
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Shonen",
    seasons: 1,
  },
  {
    title: "Demon Slayer",
    genre: "Shonen",
    seasons: 3,
  },
  {
    title: "Hunter x Hunter",
    genre: "Seinen",
    seasons: 6,
  },
];

const showanimeSeries = () => {
  console.log("Array of Anime Series objects:", animeSeries);
  animeSeries.map((series) => {
    if (series.genre === "Shonen" || series.genre === "Seinen") {
      let title = series.title;
      let genre = series.genre;
      let seasons = series.seasons;
      if (seasons !== 1) {
        console.log(
          `${title} is a ${genre} series and has ${seasons} seasons.`
        );
      } else {
        console.log(`${title} is a ${genre} series and has ${seasons} season.`);
      }
    }
  });
};

showanimeSeries();
