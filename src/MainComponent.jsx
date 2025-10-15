import React, { Component } from "react";
import Input from "./Input";

export class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      row: 0,
      col: 0,
    };
    this.handleData = this.handleData.bind(this);
  }

  // getting input from input box
  handleInput = (e) => {
    if (e.target.name === "row") {
      this.setState({row: Number(e.target.value.trim())});
    } else {
      this.setState({ col: Number(e.target.value.trim()) });
    }
  };

  // generate a random color in hex format 
  generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
    return color;
  };

  // generate array of color code 
  handleData(e) {
    e.preventDefault();
    if (this.state.row > 0 && this.state.col > 0) {
      const matrix = [];
      for (let i = 0; i < this.state.row; i++) {
        const row = [];
        for (let j = 0; j < this.state.col; j++) {
          row.push(this.generateRandomColor());
        }
        matrix.push(row);
      }
      console.log(matrix);
      console.log(matrix.flat());
    this.props.sendData(this.state.row, this.state.col, matrix);
  }
}

  render() {
    return (
      <>
        <form className="p-1 p-md-3" id="form" autoComplete="off" onSubmit={this.handleData} noValidate>
          <Input handleInput={this.handleInput} />
          <button type="submit" className="d-block mx-auto my-2 my-md-3">Generate</button>
        </form>
      </>
    );
  }
}

export default MainComponent;
