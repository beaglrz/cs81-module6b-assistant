/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module6b-assistant
*/

// Constructor for the Personal Assistant
function PersonalAssistant(name) {
 this.name = name;
  this.tasks = [];
  this.mood = "productive";
}

// Adds a Task to the List
PersonalAssistant.prototype.addTask = function (task) {
  this.tasks.push(task);
};

// Completes Task in the List
PersonalAssistant.prototype.completeTask = function () {
  if (this.tasks.length === 0) {
    console.log("No tasks left.");
    return;
  }

  const finishedTask = this.tasks.shift();
  console.log(`Completing task: ${finishedTask}`);
  console.log(`Now you have ${this.tasks.length} tasks left.`);
};

// Displays Current Mood
PersonalAssistant.prototype.reportMood = function () {
  console.log(`Mood: ${this.mood}`);
};

// Simulation of Day in my Life

const myAssistant = new PersonalAssistant("Trixi");

console.log(`Hi! I'm ${myAssistant.name}, your personal assistant.`);

// Daily Tasks
myAssistant.addTask("Do Laundry");
myAssistant.addTask("Cook Lunch");
myAssistant.addTask("Go to the Gym");

console.log("Starting Daily Tasks.");


// Tasks Left to Complete
console.log(`You have ${myAssistant.tasks.length} tasks left.`);

// Mood While Working Through the Tasks
myAssistant.mood = "Productive";
myAssistant.reportMood();

//Complete Task
myAssistant.completeTask();
myAssistant.completeTask();

// End of Day Mood
myAssistant.mood = "Accomplished";
myAssistant.reportMood();


