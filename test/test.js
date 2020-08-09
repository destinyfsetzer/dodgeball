// import modules
const assert = require("assert")

// import classes
const { Player, Teammate } = require("../main.js").default

// 3 tests
// 1. Should create a player
// 2. Should be able to create instance of Blue or Red Team
// 3. Teammate Objects should have color and mascot keys

if (typeof describe === "function") {
  describe("Player", function () {
    it("should create a player", function () {
      const player1 = new Player(1, "Destiny Setzer")
      assert.equal(player1.name, "Destiny Setzer")
      assert.equal(player1.id, 1)
    })
  })
  describe("Teammate", function () {
    it("should create a blue teammate", function () {
      const teammate1 = new Teammate(1, "Destiny Setzer", "Blue", "Tiger")
      assert.equal(teammate1.name, "Destiny Setzer")
      assert.equal(teammate1.id, 1)
      assert.equal(teammate1.color, "Blue")
      assert.equal(teammate1.mascot, "Tiger")
    })
    it("shoudl create a red teammate", function () {
      const teammate2 = new Teammate(2, "John Lennon", "Orange", "Peace")
      assert.equal(teammate2.name, "John Lennon")
      assert.equal(teammate2.id, 2)
      assert.equal(teammate2.color, "Orange")
      assert.equal(teammate2.mascot, "Peace")
    })
  })
}
