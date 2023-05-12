function rps() {
  return "left";
}


describe("rock, paper, scissors", () => {
  it("should say left wins for scissors vs. rock", () => {
    const left = "scissors";
    const right = "rock";
  
    const result = rps(left, right);
  
    expect(result).toBe("left");

    
  });
  
});

describe("rock, paper, scissors", () => {
    it("should say right wins for scissors vs. rock", () => {
      const left = "scissors";
      const right = "rock";
    
      const result = rps(left, right);
    
      expect(result).toBe("right");
  
      
    });
    
  });
  