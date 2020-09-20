const input = require('readline-sync');
// Code your transform function here:
function transform (object) {
  let results = {};
  for (let score in object) {
    let letters = object[score];
    for (let i = 0; i < letters.length; i++) {
   results[letters[i].toLowerCase()] = Number(score);
    }
  }
  return results;
}



// Code your initialPrompt function here:
let initialPrompt = function () {
  console.log(`
    Welcome to the Scrabble score calculator! \n
    Which scoring algorithm would you like to use? \n
    0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
    1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
    2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
  `);
  return input.question('Enter 0, 1, or 2:');
};

// Code your runProgram function here:
let runProgram = function() {
  let scoreWord = input.question('Enter a word to be scored, or \'Stop\' to quit:'); //asks user to enter word or quit
  if (scoreWord.toLowerCase() === 'stop') {
    return 'Calculator has been stopped.';
  } else {
  console.log(`Score for ${scoreWord}: ${scoringAlgorithms[prompt].scoreFunction(scoreWord, newPointStructure)} \n`); //takes word and scores it against proper algorithm
  return runProgram();
  }
};

// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:
let newPointStructure = transform(oldPointStructure);

// Create your scoringAlgorithms array here:
let scrabble = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: function scrabbleScore (scoreWord, newPointStructure) {
      sum = 0;
      for (let i = 0; i < scoreWord.length; i++) {
        score = newPointStructure[scoreWord[i].toLowerCase()];
        sum += score;
      }
      return sum;
  }
};

let simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: function simpleScore (scoreWord) { 
      sum = 0;
      for (let i = 0; i < scoreWord.length; i++) {
        score = 0;
        score++;
        sum += score;
      }
      return sum;
    }
};

let bonusVowels = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: function bonusVowels (scoreWord) {
      scoreWord = scoreWord.toLowerCase();
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let sum = 0;
      for (let i = 0; i < scoreWord.length; i++) { //loop through each letter and add a value depending on what it is
        if (vowels.includes(scoreWord[i])){ // For each loop that has NO a vowel
          sum += 3;
        } else { //For each loop that DOES have a vowel
          sum++;
        }
      }
      return sum; //return the sum of the constant and vowel counts
    }
};

let scoringAlgorithms = [scrabble, simpleScore, bonusVowels];


// Call the runProgram function here:
prompt = Number(initialPrompt()); //why is this calling runProgram ?

while (true) {
  if (prompt === 0){
    console.log(`\nUsing algorithm: ${scoringAlgorithms[0].name}\n`);
    break;
  } else if (prompt === 1){
    console.log(`\nUsing algorithm: ${scoringAlgorithms[1].name}\n`);
    break;
  } else if (prompt === 2){
    console.log(`\nUsing algorithm: ${scoringAlgorithms[2].name}\n`);
    break;
  } else {
    console.log('Invalid option. Try again.');
    prompt = Number(initialPrompt());
  }
}

console.log(runProgram(initialPrompt));