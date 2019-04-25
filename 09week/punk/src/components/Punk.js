import React, { Component } from 'react'
import LikeButton from '../components/LikeButton';

export default class Punk extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       apItem: [],
       loaded: false
    }
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          apItem: data,
          loaded: true
        })
      })
  }
  handleLike = (e) =>{
    e.target.value = "Unlike"
  }
  
  render() {
    if(!this.state.loaded){
      return <h1>AHHHHHH</h1>
    }else{
      return (
        <div>
          <ul>
              {this.state.apItem.map((item) =>{
                return <li>
                  <p>{item.name}: {item.description}</p>
                  <LikeButton/>
                  {/* <button value="Like" onClick={this.handleLike}></button> */}
                </li>
              })}
          </ul>
        </div>
      )
    }
  }
}