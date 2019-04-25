import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: 0
    }
  }
  handleClick = () => {
    let newVal = this.state.value;
    this.setState({
      value: ++newVal
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Liked: {this.state.value}</button>  
      </div>
    )
  }
}
