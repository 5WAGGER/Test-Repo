function Complete_Name(first_name, last_name, team) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.team = team;


  this.returnCompleteName = () => {
    return (`${this.first_name} ${this.last_name}`);
  };



  this.say = (interjection) => {
    console.log(`${interjection} ${this.first_name} ${this.last_name}!`)
  }




}



const footBallPlayer1 = new Complete_Name("Cooper", "Dejean", "Philadelphia Eagles");

const footBallPlayer2 = new Complete_Name("AJ", "Brown", "Philadelphia Eagles");

const sentence = `Together, the defensive back, ${footBallPlayer1.returnCompleteName()}, and the wide receiver, ${footBallPlayer2.returnCompleteName()}, make the great ${footBallPlayer2.team}!`



footBallPlayer1.say("You got some huge shoes to fill,")

footBallPlayer2.say("You got Aura,")

console.log(sentence)



