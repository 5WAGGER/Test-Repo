function Complete_Name(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

const testName = new Complete_Name("Bob", "The Builder");


const message = "What's Poppin'";

const noun = "World"





sayMsg = (msg) => {
    console.log(msg);
}

sayMsg(`${message} ${testName.first_name} ${testName.last_name}!`);

console.log(`Hello ${noun}`)