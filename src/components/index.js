import React, {Component} from 'react'
import '../index.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Top from './Top'
import Foo from './Foo'

class Index extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={Top}/>
        <Route path="/foo" component={Foo}/>

      </BrowserRouter>
    )
  }
}

export default Index