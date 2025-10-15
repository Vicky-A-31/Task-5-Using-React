import { Component } from 'react'

export class ColorCode extends Component {

  render() {
    return (
        <>
      <p>{`HEX Color Code: ${this.props.hexColor}`}</p>
      <p>{`RGB Color Code: rgb(${this.props.rgb[0]}, ${this.props.rgb[1]}, ${this.props.rgb[2]})`}</p>
      </>
    )
  }
}

export default ColorCode
