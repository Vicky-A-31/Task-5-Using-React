import React, { Component } from 'react'

export class Input extends Component {
    
  render() {
    return (
      <>
      <div className='d-flex'>
        <div className='m-2 m-md-3'>
        <label htmlFor="row">Row</label>
        <input type="number" placeholder='row' name='row' id='row' onChange={this.props.handleInput} />
      </div>
      <div className='m-2 m-md-3'>
        <label htmlFor="col">Column</label>
        <input type="number" placeholder='column' name='col' id='col' onChange={this.props.handleInput} />
      </div>
      </div>
      </>
    )
  }
}

export default Input
