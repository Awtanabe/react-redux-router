import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Counter extends Component {


  render(){
    const {count} = this.props.state
    return(
      <div>
        count :{count}
        <br/>

        <button onClick={() => this.props.incrementCounter()}>+</button>
        <button onClick={() => this.props.decrementCounter()}>-</button>
        <br/>
        <Link to="/">Top</Link>

      </div>
    )
  }
}

export default Counter