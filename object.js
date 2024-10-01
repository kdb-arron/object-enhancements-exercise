//Same Keys and Values
//ES5 Version:
function createInstructor(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName
    };
  }

  //Same keys and values 
  //ES2015 Version:
  const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
  });
  
// Computed Property Names
// ES5 Version:
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
};

instructor[favoriteNumber] = "That is my favorite!";

// Computed Property Names 
// ES2015 Version:
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

// Object Methods
// ES5 Version:
var instructor = {
    firstName: "Colt",
    sayHi: function() {
      return "Hi!";
    },
    sayBye: function() {
      return this.firstName + " says bye!";
    }
  };
  
//   Object Methods 
//   ES2015 Version:
const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };
  
// createAnimal function
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

// ES2015 Version:
const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
      return noise;
    }
  });
  
