import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button className="btn btn-default">Increment</button>
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
