function rps(left, right) {
    return left === "rock" || right === "paper" || (left === "paper" && right === "rock")
      ? "left"
      : "right";
  }
  
  module.exports = rps;