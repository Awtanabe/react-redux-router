import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Top extends Component{

  render(){
    return(
      <div>
        Top
        <br/>
        <Link to="/counter">Counter</Link>
      </div>
    )
  }
}

export default Top