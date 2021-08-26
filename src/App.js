import React, { Component } from 'react';
import Movies from './components/movies';
import Counters from './components/counters'
import NavBar from './components/navbar';
class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  constructor() {
    super();
    console.log('app Constructor',);
    //this.state = this.props.something;

  }

  componentDidMount() {
    // perfect place for ajax call()
    console.log('app Constructor',);
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counteId) => {
    const counters = this.state.counters.filter((c) => c.id !== counteId);
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;

      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;