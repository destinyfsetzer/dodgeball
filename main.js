/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */

// Creates an array of objects representing players and their attributes.
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
]

// creates empty arrays for list of players and teams
// const listOfPlayers = []
// const blueTeam = []
// const redTeam = []

// object constructors for players and teams
class Player {
  constructor(
    id,
    name,
    index,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id
    this.name = name
    this.index = index
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }

  addPlayer() {
    const uniqueId = this.id
    const uniqueName = this.name

    const listPlayers = document.getElementById("players")
    const li = document.createElement("li")
    li.setAttribute("id", this.index)

    const button1 = document.createElement("button")
    button1.innerHTML = "Blue Team"
    button1.addEventListener("click", function () {
      addTeammate(uniqueId, uniqueName, "Blue", "The Smurfs", this.index)
    })

    const button2 = document.createElement("button")
    button2.innerHTML = "Red Team"
    button2.addEventListener("click", function () {
      addTeammate(uniqueId, uniqueName, "Red", "The Red Lobsters", this.index)
    })

    listPlayers.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}`
      )
    )
    li.appendChild(button1)
    li.appendChild(button2)
  }
}

// creates a teammate that "adds to" player
class Teammate extends Player {
  constructor(
    id,
    name,
    color,
    mascot,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      id,
      name,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
    this.color = color
    this.mascot = mascot
  }

  // adds a blue teammate
  addBlueTeammate() {
    const listBlue = document.getElementById("blue")
    const li = document.createElement("li")
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}`
      )
    )
  }

  // adds a red teammate
  addRedTeammate() {
    const listBlue = document.getElementById("red")
    const li = document.createElement("li")
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}`
      )
    )
  }
}

// function that populates HTML players
const listPeopleChoices = () => {
  const listElement = document.getElementById("people")
  arrOfPeople.map((person, index) => {
    const li = document.createElement("li")
    li.setAttribute("id", index)
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id, person.name, li.id)
    })
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(`${person.name} - ${person.skillSet}`)
    )
    listElement.append(li)
  })
}

// makes a player and removes them from "available player" list
const makePlayer = (id, name, i) => {
  new Player(id, name).addPlayer()
  const h1 = document.getElementById("people")
  const li = document.getElementById(i)
  h1.removeChild(li)
}

// assigns player to a team
const addTeammate = (id, name, color, mascot, i) => {
  if (color === "Blue") {
    new Teammate(id, name, color, mascot).addBlueTeammate()
  } else {
    new Teammate(id, name, color, mascot).addRedTeammate()
  }
  const h4 = document.getElementById("players")
  const li = document.getElementById(i)
  h4.removeChild(li)
}

module.exports = {
  Player,
  Teammate,
  addTeammate,
  makePlayer,
  listPeopleChoices,
}
