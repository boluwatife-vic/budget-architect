const prompt = require("prompt-sync")()

let name = prompt("Enter your name:");

let weeklyBudget = prompt("Enter your weekly budget:");

function calculateDaily(total){
  return total / 7
}

let dailyLimit = calculateDaily(weeklyBudget);

if (dailyLimit < 2000){ 
  console.log("Avoid luxury expenses");
}
else if (dailyLimit > 2000 && dailyLimit <= 10000){
  console.log("You have a balanced budget!");
}else {
  console.log("Consider investing your surplus");
} 
