import React, {Component} from 'react'
import '../index.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Top from './Top'
import Counter from '../containers/Counter'
import Foo from './Foo'
import {Provider} from 'react-redux'

class Root extends Component{

  render(){
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
        <Route exact path="/" component={Top}/>
        
        <Route path="/counter" component={Counter}/>

        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root