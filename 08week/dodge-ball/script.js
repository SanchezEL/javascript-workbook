const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player{
  constructor(person){
    this.person = person;
  }
}
class BlueTeammate extends Player {
  constructor(player){
    super(player.person)
    this.color = 'blue'
  }
}
class RedTeammate extends Player {
  constructor(player){
    super(player.person)
    this.color = 'red'
  }
}

const listPeopleChoices = () => {
  document.getElementById('people').innerHTML = ''
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  arrOfPeople.forEach(person => {
    if(person.id === id){
      let player = new Player(person)
      listOfPlayers.push(player)
      console.log(player)
      console.log(arrOfPeople)
      arrOfPeople.splice(arrOfPeople.indexOf(person),1)
      console.log(arrOfPeople)
      listPeopleChoices()
      listPlayers()
    }
  })
}
const listPlayers = () => {
  document.getElementById('players').innerHTML = ''
  listOfPlayers.map(player => {
    const listElementPlay = document.getElementById('players')
    const liPlay = document.createElement("li")
    const buttonBlue = document.createElement("button")
    buttonBlue.innerHTML = `Blue`
    buttonBlue.addEventListener('click', function() {addBluePlayer(player.person.id)} )
    liPlay.appendChild(buttonBlue)
    const buttonRed = document.createElement("button")
    buttonRed.innerHTML = `Red`
    buttonRed.addEventListener('click', function() {addRedPlayer(player.person.id)} )
    liPlay.appendChild(buttonRed)
    liPlay.appendChild(document.createTextNode(player.person.name + " - " + player.person.placeBorn))
    listElementPlay.append(liPlay)
  })
}

const addBluePlayer = (id) => {
  listOfPlayers.forEach(player => {
    if(player.person.id === id){
      console.log('id of player', player.person.id)
      let bluePlayer = new BlueTeammate(player)
      console.log('blue', bluePlayer)
      blueTeam.push(bluePlayer)
      listOfPlayers.splice(listOfPlayers.indexOf(player),1)
      listPlayers()
      listBlueTeam()
    }
  })
}

const listBlueTeam = () => {
  document.getElementById('blue').innerHTML = ''
  blueTeam.map(bluePlayer => {
    const listElementPlay = document.getElementById('blue')
    const liPlay = document.createElement("li")
    let person = bluePlayer.person
    liPlay.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    let button = document.createElement("button")
    button.innerHTML = `Delet`
    button.addEventListener('click', function() {deleteBlueTeamMember(bluePlayer)} )
    liPlay.appendChild(button)
    listElementPlay.append(liPlay)
  })
}
const addRedPlayer = (id) => {
  listOfPlayers.forEach(player => {
    if(player.person.id === id){
      let redPlayer = new RedTeammate(player)
      redTeam.push(redPlayer)
      // player.color = 'red'
      // console.log(player)
      // console.log(listOfPlayers)
      listOfPlayers.splice(listOfPlayers.indexOf(player),1)
      // console.log('list of players',listOfPlayers)
      // console.log('red team', redTeam)
      // listPeopleChoices()
      listPlayers()
      listRedTeam()
    }
  })
}

const listRedTeam = () => {
  document.getElementById('red').innerHTML = ''
  redTeam.map(redPlayer => {
    const listElementPlay = document.getElementById('red')
    const liPlay = document.createElement("li")
    let person = redPlayer.person
    liPlay.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    let button = document.createElement("button")
    button.addEventListener('click', function() {deleteRedTeamMember(redPlayer)} )
    button.innerHTML = `Delet`
    liPlay.appendChild(button)
    listElementPlay.append(liPlay)
  })
}

const deleteBlueTeamMember = (player) => {
  console.log("deleting", player)
  let ahhh = blueTeam[blueTeam.indexOf(player)].person
  console.log(ahhh)
  arrOfPeople.push(ahhh)
  blueTeam.splice(blueTeam.indexOf(player),1)
  listBlueTeam()
  listPeopleChoices()
}
const deleteRedTeamMember = (player) => {
  let ahhh = redTeam[redTeam.indexOf(player)].person
  console.log(ahhh)
  arrOfPeople.push(ahhh)
  redTeam.splice(redTeam.indexOf(player),1)
  listRedTeam()
  listPeopleChoices()
}