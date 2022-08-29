// INTRODUCTION
// ----------------------------------------------------------------
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
// GLOBAL SCOPE

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
/*
// --------------------------------
// GLOBAL VARIABLES CHALLENGE
// --------------------------------
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
