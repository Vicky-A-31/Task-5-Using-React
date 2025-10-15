import React, { Component } from "react";

export class Result extends Component {
  render() {

    let list = []
    let count = 0; // count for key prop every child
    for(let i=0; i<this.props.row; i++) {
        let rowCollection = []
        for(let j=0; j<this.props.col; j++) {
            rowCollection.push(
                <div
                key={count++}
                style={{
                  display: "inline-block",
                  backgroundColor: `${this.props.matrix[i][j]}`,
                  border: "1px solid ",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => this.props.clickedCell(this.props.matrix[i][j])}
                >
                </div>
            )
        }
        list.push(<div>{rowCollection}</div>)
    }

    return (
      <>
        <div id="grid-container">
            {list}
            
          {/* 
          // intha approach ku matrix ah flat pannanaum i mean 1D array mathanum
          {this.props.matrix.map((element, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "inline-block",
                  backgroundColor: element,
                  border: "1px solid ",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => this.props.clickedCell(element)}
              ></div>
            );
          })} */}
        </div>
      </>
    );
  }
}

export default Result;
