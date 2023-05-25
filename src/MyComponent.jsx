import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Click for +1</button>
      </div>
    );
  }
}

export default MyComponent;
