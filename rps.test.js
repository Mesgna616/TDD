const rps = require("./rps");

describe("rock, paper, scissors", () => {
  it("should say left wins for rock vs scissors ", () => {
    const left = "rock";
    const right = "scissors";

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
describe("rock, paper, scissors", () => {
  it("should say left wins for scissors vs paper", () => {
    const left = "scissors";
    const right = "paper";
    const result = rps(left, right);
    expect(result).toBe("left");
  });
});

describe("rock, paper, scissors", () => {
  it("should say right wins for paper vs scissors", () => {
    const left = "paper";
    const right = "scissors";
    const result = rps(left, right);
    expect(result).toBe("right");
  });
});

describe("rock, paper, scissors", () => {
    it("should say right wins for rock vs. paper", () => {
        const left = "rock";
        const right = "paper";
      
        const result = rps(left, right);
      
        expect(result).toBe("right");
      });
      
  });

describe("rock, paper, scissors", () => {
  it("should say left wins for paper vs rock", () => {
    const left = "paper";
    const right = "rock";
    const result = rps(left, right);
    expect(result).toBe("left");
  });
});

describe("rock, paper, scissors", () => {
    ["rock", "paper", "scissors"].forEach((both) => {
      it(`should say draw for ${both} vs. ${both}`, () => {
        expect(rps(both, both)).toBe("draw");
      });
    });
  });
  
  describe("rock, paper, scissors", () => {
    it("should throw an error if either input is invalid", () => {
      expect(() => rps("bananas", "rock")).toThrowError("Invalid input: please provide 'rock', 'paper', or 'scissors'");
      expect(() => rps("paper", "socks")).toThrowError("Invalid input: please provide 'rock', 'paper', or 'scissors'");
      expect(() => rps("banana", "socks")).toThrowError("Invalid input: please provide 'rock', 'paper', or 'scissors'");
    });
  });
  