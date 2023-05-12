function rps(left, right) {
    return (
      (left === "rock" && right === "scissors")
      || (left === "scissors" && right === "paper")
      || (left === "paper" && right === "rock")
    )
      ? "left"
      : "right";
  }
  
  
  module.exports = rps;