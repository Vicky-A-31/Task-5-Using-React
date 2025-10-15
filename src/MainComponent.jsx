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

  handleInput = (e) => {
    if (e.target.placeholder === "row") {
      this.setState({ ...this.state, row: Number(e.target.value.trim()) });
    } else {
      this.setState({ ...this.state, col: Number(e.target.value.trim()) });
    }
  };

  generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
    return color;
  };

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
    this.props.sendData(this.state.row, this.state.col, matrix.flat());
  }
}

  render() {
    return (
      <>
        <form onSubmit={this.handleData}>
          <Input handleInput={this.handleInput} />
          <button type="submit">Generate</button>
        </form>
      </>
    );
  }
}

export default MainComponent;
