import React, { Component } from 'react'
import NavBar from './Components/navbar'
import './App.css';
import Counters from './Components/counters';

class App extends Component {
  state = { 
    counters : [
        {id: 1, value: 4, name: "Women's Maroon Super Soft V-Neck"},
        {id: 2, value: 0, name: 'Samsung Galaxy M12'},
        {id: 3, value: 0, name: 'New Apple iPhone 11 (128GB) - Green'},
        {id: 4, value: 0, name: 'Juniper N95 Face Mask'}
    ]
 };

 constructor(props) {
   super(props);
   console.log("App - Constructor", this.props);
 }

 componentDidMount() {
   console.log("App - Mounted");
 }



handleReset = () => {
    const counters = this.state.counters.map(c => {c.value = 0; return c;});
    this.setState({counters});
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
};

handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};

render() {
  console.log("App - Rendered");

  return (
    <>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
    <main className = "container">
      <Counters 
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
        counters = {this.state.counters}
      />
    </main>
    </>
  );
}
}

export default App;
