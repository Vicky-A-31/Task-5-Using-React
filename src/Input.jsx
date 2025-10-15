import React, { Component } from 'react'

export class Input extends Component {
    
  render() {
    return (
      <>
      <div>
        <label htmlFor="row">Row</label>
        <input type="text" placeholder='row' id='row' onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor="col">Column</label>
        <input type="text" placeholder='column' id='col' onChange={this.props.handleInput} />
      </div>
      </>
    )
  }
}

export default Input