
//this a constructor for a object
function Complete_Name(first_name, last_name, team) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.team = team;

  // this a method within the object that return the first and last name
  this.returnCompleteName = () => {
    return (`${this.first_name} ${this.last_name}`);
  };

//this is a method that takes a parameter and logs it to the console with the first and last name

  this.say = (interjection) => {
    console.log(`${interjection} ${this.first_name} ${this.last_name}!`)
  }

}


// 2 instances of objects
const footBallPlayer1 = new Complete_Name("Cooper", "Dejean", "Philadelphia Eagles");

const footBallPlayer2 = new Complete_Name("AJ", "Brown", "Philadelphia Eagles");

// example of using the methods within the objects 

//footBallPlayer1.say("You got some huge shoes to fill,")

//footBallPlayer2.say("You got Aura,")


// there is a difference between ` and ' so be sure to use back ticks `` for stuff like this

//const sentence = `Together, the defensive back, ${footBallPlayer1.returnCompleteName()}, and the wide receiver, ${footBallPlayer2.returnCompleteName()}, make the great ${footBallPlayer2.team}!`

// logging all properties of all objects including distinct team 

//console.log(sentence)




/*
min = 1
max = 2
const rndInt = Math.floor(Math.random() * (max - min + 1) + min)
let isGood;

if (rndInt == 1){
  isGood = true
} else{
  isGood = false
}
*/


//example of a Promises => Async - Await


const washFruit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const washFruit = true;

      if (washFruit) {
        resolve("Wash Fruit thoroughly under running water")
      } else {
        reject("No clean water to wash fruit...")
      }
    }, 1000)
  })
};

const peelFruit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const peelorcutfruit = true;

      if (peelorcutfruit) {
        resolve("Peel fruit")
      } else {
        reject("Couldn't peel fruit...")
      }
    }, 1000)
  })
};

const scoopSeeds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasbigspoon = true;

      if (hasbigspoon) {
        resolve("Scoop out all the seeds from the fruit and compost")
      } else {
        reject("Couldn't find big spoon...")
      }
    }, 1000)
  })
};

const portionFreshFruit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hascontainers = true;

      if (hascontainers) {
        resolve("Put fresh fruit in containers and refrigerate")
      } else {
        reject("No clean containers...")
      }
    }, 1000)
  })
};


const freshFruitPreparation = async () => {
  try {
      const activityOne = await washFruit()
      console.log(activityOne)

      const activityTwo = await peelFruit()
      console.log(activityTwo)

      const activityThree = await scoopSeeds()
      console.log(activityThree)

      const activityFour = await portionFreshFruit()
      console.log(activityFour)

      console.log("Ahh how satisfying to have fresh fruit ready!")
  }
  catch(error){
    console.log(error)
  }

}

freshFruitPreparation()