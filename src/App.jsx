import React, { Component } from "react";
import MainComponent from "./MainComponent";
import Result from "./Result";
import ColorCode from "./ColorCode";

export class App extends Component {
  constructor() {
    super();
    this.state = { row: "", col: "", matrix: [], selectedColor: "" };
    this.getData = this.getData.bind(this);
  }

  getData(a, b, matrix) {
    this.setState({ row: a, col: b, matrix: matrix });
  }

  handleCellClick = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <>
        <MainComponent sendData={this.getData} />
        {this.state.matrix.length > 0 && 
            <Result
              row={this.state.row}
              col={this.state.col}
              matrix={this.state.matrix}
              clickedCell={this.handleCellClick}
            />
        }
        {
          this.state.selectedColor && <ColorCode color={this.state.selectedColor} />
        }
      </>
    );
  }
}

export default App;
