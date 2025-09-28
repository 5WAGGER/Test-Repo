
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

footBallPlayer1.say("You got some huge shoes to fill,")

footBallPlayer2.say("You got Aura,")


// there is a difference between ` and ' so be sure to use back ticks `` for stuff like this

const sentence = `Together, the defensive back, ${footBallPlayer1.returnCompleteName()}, and the wide receiver, ${footBallPlayer2.returnCompleteName()}, make the great ${footBallPlayer2.team}!`

// logging all properties of all objects including distinct team 

console.log(sentence)



