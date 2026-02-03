/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module6b-assistant
*/

// Constructor for the Personal Assistant
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "Neutral";
}

// Adds a Task to the List
PersonalAssistant.prototype.addTask = function (task) {
  this.tasks.push(task);
  console.log(`Added Task: ${task}`);
  console.log(`Tasks Left: ${this.tasks.length}`);
};

// Completes Task in the List
PersonalAssistant.prototype.completeTask = function () {
  if (this.tasks.length === 0) {
    console.log("Tasks Completed");
    return;
  }

  const finishedTask = this.tasks.shift();
  console.log(`Completing Task: ${finishedTask}`);
  console.log(`Tasks Left: ${this.tasks.length}`);
};

// Displays Current Mood
PersonalAssistant.prototype.reportMood = function () {
  console.log(`Mood: ${this.mood}`);
};



