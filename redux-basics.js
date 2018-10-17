const redux = require('redux');
const createStore = redux.createStore;

const initialState={
    counter:0
}
//Reducers
const rootReducer=(state = initialState,action)=>{
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter+action.payload.value
        }
    }
    //return updated state or in simplest term the old state
    return state;
};
//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(()=>{
    console.log('Subscription',store.getState());
})
//Dispatching actions
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',payload:{value:10}});
console.log(store.getState());

