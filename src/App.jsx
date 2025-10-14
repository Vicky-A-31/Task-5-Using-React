import React, { Component } from 'react'
import MainComponent from './MainComponent'
import Result from './Result'
import ColorCode from './ColorCode'

export class App extends Component {
  constructor() {
    super();
    this.state = {}
    this.getData = this.getData.bind(this);
  }

  getData(a,b) {
    this.setState({ row: a, col: b });
  }

  render() {
    return (
      <>
        <MainComponent sendData={this.getData} />
        {
          this.state.row && this.state.col && <Result row={this.state.row} col={this.state.col} />
        }
        <ColorCode />
      </>
    )
  }
}

export default App
