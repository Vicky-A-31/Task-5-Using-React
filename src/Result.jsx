import React, { Component } from "react";

export class Result extends Component {
  

  handleColorClick = (color) => {
    this.props.clickedCell(color);
  };


  render() {
    /*
    let count = 0;
    const divArray = [];
    for(let i=0; i<this.props.row; i++) {
        for(let j=0; j<this.props.col; j++) {   
            divArray.push(
                <div 
                    key={count++}
                    onClick={() => this.handleColorClick(this.props.matrix[i][j])}
                    style={{
                        display: 'inline-block',
                        width: '100px',
                        backgroundColor: this.props.matrix[i][j],
                        height: '100px',
                        border: '1px solid black',
                    }}
                ></div>)
        }
    }
    console.log(divArray);
    console.log(typeof divArray)
    */

    return (
      <>
        <div>
            {
                this.props.matrix.map((element, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                display: 'inline-block',
                                width: '100px',
                                backgroundColor: element,
                                height: '100px',
                                border: '1px solid black',
                            }}
                            onClick={() => this.handleColorClick(element)}
                        ></div>
                    )
                })
            }
        </div>
      </>
    );
  }
}

export default Result;
