import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from '../actions/counter'
import Counter from '../components/Counter'

function mapStateToProps(state){
  return {state}
}

function mapDispatchToProps(dispatch){
  return {
    incrementCounter(count){
      dispatch(incrementCounter(count))
    },
    decrementCounter(count){
      dispatch(decrementCounter(count))
    }
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Counter)