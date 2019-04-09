'use strict'

var users;
function getUsers(){
  // ?results=100
  document.getElementById('output').innerHTML = ''
  fetch('https://randomuser.me/api/?results=5')
  .then((res)=>res.json())
  .then((data)=> {
    // console.log(data)
    let arr = []
    data.results.forEach(item => {
      // console.log(item)
      arr.push(item)
      // .name.first + ' ' + item.name.last
      
    });
    console.log(arr)
    let count = 0
    users = arr
    arr.forEach(user =>{
      let somethin = user
      document.getElementById('output').innerHTML += `<img src=${user.picture.medium}></img>  ` +user.name.first +' '+ user.name.last + ' ' + `<button onClick = "display(${count})">click</button> <div id = 'space${count}'> </div><br>`
      count++;
    })
  }).catch((err) => console.log(err))
}
getUsers()

function display(num){
  document.getElementById(`space${num}`).innerHTML = `Age: ` + users[num].dob.age + ` <br>  Address: ` + users[num].location.street + `, ` + users[num].location.city + `, ` + users[num].location.state
}
