import * as actionType from "../action";

const initialState = {
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT: {
      return {
        ...state,
        //concat return old array + new value wich is passed
        results: state.results.concat({ id: new Date(), val: action.result })
      };
    }
    case actionType.DELETE_RESULT: {
      //we CAN use this but fliter is more often used
      // const id=2;
      // const newArray=[...state.results];
      // newArray.splice(id,1);

      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
