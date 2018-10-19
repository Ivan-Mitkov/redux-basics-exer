import React, { Component } from "react";

//HOC
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionType from "../../store/action";

class Counter extends Component {
  // state = {
  //     counter: 0
  // }

  // counterChangedHandler = ( action, value ) => {
  //     switch ( action ) {
  //         case 'inc':
  //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
  //             break;
  //         case 'dec':
  //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
  //             break;
  //         case 'add':
  //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
  //             break;
  //         case 'sub':
  //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
  //             break;
  //     }
  // }

  render() {
    return (
      <div>
        {/* <CounterOutput value={this.state.counter} /> */}
        <CounterOutput value={this.props.ctr} />
        {/* the method is passed by props */}
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add" clicked={this.props.onAdd} />
        <CounterControl label="Subtract" clicked={this.props.onSubstract} />
        <hr />
        {/* to get the results pass the value of this.props.ctr  which came from reducer*/}
        <button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Store Results</button>
        <ul>
          {this.props.storedResult.map(res => {
            return (
              <li
                key={res.id}
                onClick={() => this.props.onDeleteResults(res.id)}
              >
                {res.val}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
//connect pass configuration to this container
//configure which slice of state want to get and wich actions want to dispatch;
//after the class

//how the state managed by redux should be map to props used by this container.
//We don't need something which is changed internaly - like state, props are not changed internaly
//so we are using props instead of state
const mapStateToProps = state => {
  return {
    //when combine reducers has to add one extra level
    ctr: state.ctr.counter,
    storedResult: state.res.results
  };
};
//which kind of action i want to dispatch in this container
//react redux package give as thi helper function /dispatch/ which will call dispatch on the store
const mapDispatchToProps = dispatch => {
  //return reference to a function which shoul be eventualy executed to dispatch an action
  return {
    //the property shoul hold anonymous function
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAdd: () => dispatch({ type: actionType.ADD, val: 10 }),
    onSubstract: () => dispatch({ type: actionType.SUBSTRACT, val: 5 }),
    //to get the result pass argument and add extra parametar use the key in actionType.STORE_RESULTS   
    onStoreResults: result =>
     // and bind the value to the result argument we expect to get
      dispatch({ type: actionType.STORE_RESULT, result: result }),
    onDeleteResults: id =>
      dispatch({ type: actionType.DELETE_RESULT, resultElId: id })
  };
  //then we pass this prop to   <CounterControl and adjust the reducer to handle this action
};
//connect return this container with access to this ctr: property so in render not pass this.state.counter but this.props.ctr
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
