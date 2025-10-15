import { Component } from 'react'

export class ColorCode extends Component {
  render() {
    return (
      <p>{`Color Code: ${this.props.color}`}</p>
    )
  }
}

export default ColorCode