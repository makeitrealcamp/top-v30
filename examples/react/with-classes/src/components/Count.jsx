import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('montaje')
  }

  componentDidUpdate() {
    console.log('actualizacion')
  }

  componentWillUnmount() {
    console.log('desmontaje')
  }

  render() {
    const { count, onIncrement } = this.props
    return(
      <div className="card">
        <h1>{count}</h1>
        <button onClick={onIncrement}>Click Me!</button>
      </div>
    )
  }
}

export default Count