import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("PrevProps ", prevProps);
        console.log("PrevState ", prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get the new data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmounted");
    }

    render() {
        console.log("Counter - Rendered");

        const {counter, onIncrement, onDelete} = this.props;
        return (
        <React.Fragment>
        <li style = {{fontFamily: 'sans-serif', listStyle: 'none'}}>{counter.name}</li><span className = {this.getBadgeClasses()} style = {{fontSize: '1.1em', fontWeight:'bolder'}}>{counter.value}</span>
        <button className = "btn btn-secondary btn-sm" onClick = {() => onIncrement(counter)} style = {{fontWeight:'bolder'}}>Add</button>
        <button className = "btn btn-danger btn-sm m-2" onClick = {() => onDelete(counter.id)} style = {{fontWeight:'bolder'}}>Remove</button>
        <br />
        <br />
        </React.Fragment>
        );
    }

    //Adding classNames dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        return classes += this.props.counter.value === 0 ? "warning" : "primary";
    }
}
 
export default Counter;