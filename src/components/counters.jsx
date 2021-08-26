import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("counters rendeer");
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          RESET
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
