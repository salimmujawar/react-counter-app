import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-default">
          Increment
        </button>
        <button onClick={this.handleReset} className="btn btn-danger m-5">
          Reset
        </button>
      </div>
    );
  }

  getBadgesClasses() {
    let classes = "badge m-5 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
