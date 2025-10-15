import React, { Component } from "react";
import MainComponent from "./MainComponent";
import Result from "./Result";
import ColorCode from "./ColorCode";

export class App extends Component {
  constructor() {
    super();
    this.state = { row: "", col: "", matrix: [], selectedColor: "", rgb: []};

    this.getData = this.getData.bind(this);
    this.convertHextoRgb = this.convertHextoRgb.bind(this);
  }

  // get row, col and matrix from main component
  getData(a, b, matrix) {
    this.setState({ row: a, col: b, matrix: matrix });
  }

  // get color when i click it
  handleCellClick = (color) => {
    console.log(color)
    this.setState(prevState => ({ ...prevState, selectedColor: color }));
    console.log(this.state.selectedColor)
    this.convertHextoRgb(color);
    console.log(color)
  };

  // convert hex code to rgb code
  convertHextoRgb(color) {
    let hex = color;
    console.log(hex)
    hex = hex.substring(1);
    
    const r = parseInt(hex.substring(0, 2), 16);
    console.log(r)
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    console.log(r,g,b)
    this.setState({rgb: [r,g,b] })
  }

  render() {
    return (
      <>
        <div className="container">
          <h3>Matrix Color Generator</h3>
          <div className="d-flex flex-column align-items-center w-100">
            <MainComponent sendData={this.getData} />
        
          </div>
          {this.state.matrix && this.state.matrix.length > 0 && 
            <Result
              row={this.state.row}
              col={this.state.col}
              matrix={this.state.matrix}
              clickedCell={this.handleCellClick}
            />
        }
        {
          this.state.selectedColor && <ColorCode hexColor={this.state.selectedColor} rgb={this.state.rgb} />
        }
        </div>
      </>
    );
  }
}

export default App;
