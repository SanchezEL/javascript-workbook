'use strict'

var users;
function getUsers(){
  // ?results=100
  document.getElementById('output').innerHTML = ''
  fetch('https://randomuser.me/api/?results=5')
  .then((res)=>res.json())
  .then((data)=> {
    let arr = []
    data.results.forEach(item => {
      arr.push(item)      
    });
    let count = 0
    users = arr
    arr.forEach(user =>{
      let somethin = user
      document.getElementById('output').innerHTML += `<img src=${user.picture.medium}></img>  ` +user.name.first +' '+ user.name.last + ' ' + `<button onClick = "display(${count})">click</button> <div id = 'space${count}'></div><br>`
      count++;
    })
  }).catch((err) => console.log(err))
}
getUsers()

function display(num){
  if(document.getElementById(`space${num}`).innerHTML === ''){
    document.getElementById(`space${num}`).innerHTML = `Age: ` + users[num].dob.age + ` <br>  Address: ` + users[num].location.street + `, ` + users[num].location.city + `, ` + users[num].location.state
  }
  else{
    document.getElementById(`space${num}`).innerHTML = ''

  }

}
