import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      active: props.active
    }
    this.active = props.active;
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {
    console.log('Hello')
  }

  // useEffect(() => {
    // console.log('Hello')
  // }, [])


  componentDidUpdate() {
    console.log('Hello')
    this.setState({ ...this.state, active: !this.state.active })
  }

   // useEffect(() => {

  // }, [post])

   // useEffect(() => {

  // })

  componentWillUnmount() {
    console.log('Hello')
  }

  // useEffect(() => {
    // return () => {
    //   console.log('Hello')
    // }
  // }, [])


  render() {

    return (
      <div>
        <h1>MyClassComponent</h1>
        <p>Count: {this.state.count}{this.active}</p>
        <p>Active: {this.state.active ? 'true' : 'false'}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    )

    }

}