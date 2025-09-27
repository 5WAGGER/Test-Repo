function Complete_Name(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;


  this.returnCompleteName = () => {
    return (`${this.first_name} ${this.last_name}`);
  };



  this.say = (interjection) => {
    console.log(`${interjection} ${this.first_name} ${this.last_name}!`)
  }



}



const footBallPlayer1 = new Complete_Name("Cooper", "Dejean");

const footBallPlayer2 = new Complete_Name("AJ", "Brown");

const sentence = `Together, the defensive back, ${footBallPlayer1.returnCompleteName()}, and the wide receiver, ${footBallPlayer2.returnCompleteName()}, make a great team!`



footBallPlayer1.say("You got some huge shoes to fill,")

footBallPlayer2.say("You got Aura,")

console.log(sentence)



