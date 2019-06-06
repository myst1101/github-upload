import React, { useEffect, useState } from "react";

/*class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}
*/
function Example() {
  const [count, setCount] = useState(0);
  const display =
    count === 0
      ? "click me!"
      : count === 1
      ? `you clicked ${count} time`
      : `you clicked ${count} times`;
  useEffect(() => {
    document.title = display;
  });
  return (
    <div>
      <p>{display}</p>
      <button onClick={() => setCount(count + 1)}>Click me or see!</button>
    </div>
  );
}
export default Example;
