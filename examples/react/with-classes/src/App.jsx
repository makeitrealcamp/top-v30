import { Component } from "react";
import "./App.css";
import Count from "./components/Count";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      view: true,
    }
  }
  
  
  handleIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }
  
  render() {
    const { count, view } = this.state

    return(
      <>
        <h1>Vite + React</h1>
        <button 
          onClick={() => this.setState((state) => ({view: !state.view}))}
        >
          {view ? 'Ocultar' : 'Mostrar'}
        </button>
        {view &&
          <Count
            count={count}
            onIncrement={this.handleIncrement}
          />
        }
      </>
    )
  }
}

export default App;