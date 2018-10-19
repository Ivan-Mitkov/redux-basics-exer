import * as actionType from '../action';

const initialState = {
    counter: 0,
}
const reducer = (state = initialState, action) => {
    switch(action.type){
       case actionType.INCREMENT: {
            return {
                //this is not merged with the old state, this is the new state
                ...state,
                counter: state.counter + 1
            }
        }
       case actionType.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
       case actionType.ADD: {
            return {
                ...state,
                counter: state.counter + action.val
            }
        }
       case actionType.SUBSTRACT: {
            return {
                ...state,
                counter: state.counter - action.val
            }
        }
     
        default:{
            return state;
        }
    }
   
}

export default reducer; 