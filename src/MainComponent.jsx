import React, { Component } from 'react'
import Input from './Input'

export class MainComponent extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleData = this.handleData.bind(this);
    }

    handleInput = (e) => {
        if(e.target.placeholder === 'row') {
            this.setState({...this.state, row : Number(e.target.value.trim())});
        } else {
            this.setState({ ...this.state, col : Number(e.target.value.trim()) });
        }

    }

    handleData(e) {
        e.preventDefault();
        this.props.sendData(this.state.row, this.state.col);
    }
    

  render() {
    return (
      <>
        <form onSubmit={this.handleData}>
            <Input  handleInput={this.handleInput} />
            <button type='submit'>Generate</button>
        </form>
      </>
    )
  }
}

export default MainComponent