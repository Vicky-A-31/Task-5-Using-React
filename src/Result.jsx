import React, { Component } from 'react'

export class Result extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            row : props.row,
            col : props.col,
            colors : []
        }
    }

    generateRandomHexColor = () => {
  // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
  let randomColorNumber = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string
  let hexColor = randomColorNumber.toString(16);

  // Pad the hexadecimal string with leading zeros if necessary to ensure it's 6 characters long
  // This handles cases where the random number results in a shorter hex string (e.g., "FFF" instead of "000FFF")
  hexColor = hexColor.padStart(6, '0');

  // Prepend '#' to create a valid CSS hexadecimal color code
  return `#${hexColor}`;
}

    componentDidMount() {
        const matrix = [];
        for(let i=0; i<this.state.row; i++) {
            for(let j=0; j<this.state.col; j++) {
                const randomColor = this.generateRandomHexColor();
                matrix.push(randomColor);
            }
        }   
        console.log(matrix)
        this.setState({...this.state, colors : matrix})
        console.log(this.state.colors)
        console.log(this.state.row)
        console.log(this.state.col)
        
    }

  render() {
    return (
      <>
      <h3>Result</h3>
      <p>{this.state.row} {this.state.col}</p>
      <ul> 
        {/* {
            this.state.colors.map(e => <p>e</p>)
        } */}
      </ul>
      </>
    )
  }
}

export default Result