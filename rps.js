function rps(left, right) {
    const validInputs = ["rock", "paper", "scissors"];
  
    if (!validInputs.includes(left) || !validInputs.includes(right)) {
      throw new Error("Invalid input: please provide 'rock', 'paper', or 'scissors'");
    }
  
    return left === right ? "draw" : left === "rock" && right === "scissors" || left === "paper" && right === "rock" || left === "scissors" && right === "paper" ? "left" : "right";
  }
  console.log(rps("scissors", "scissors"))

  
  module.exports = rps;