import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log("Counters - Rendered");

        const {onReset, onDelete, onIncrement, counters} = this.props
        return (<div>
            <div style = {{marginTop: '20px'}}>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2"
            style = {{fontWeight:'bolder'}}>Reset Items</button>
            </div>
            <br/>
            {counters.map(counter =>
            <Counter
            key = {counter.id}
            onDelete = {onDelete}
            onIncrement = {onIncrement}
            counter = {counter}
         />)}
        </div>);
    }
}
 
export default Counters;