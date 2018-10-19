
// DOESN'T need this anymore
// import * as actionType from './action';

// const initialState = {
//     counter: 0,
//     results:[]
// }
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//        case actionType.INCREMENT: {
//             return {
//                 //this is not merged with the old state, this is the new state
//                 ...state,
//                 counter: state.counter + 1
//             }
//         }
//        case actionType.DECREMENT: {
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         }
//        case actionType.ADD: {
//             return {
//                 ...state,
//                 counter: state.counter + action.val
//             }
//         }
//        case actionType.SUBSTRACT: {
//             return {
//                 ...state,
//                 counter: state.counter - action.val
//             }
//         }
//         case actionType.STORE_RESULT:{
//             return{
//                 ...state,
//                 //concat return old array + new value wich is passed
//                 results:state.results.concat({id:new Date(),val:state.counter})
//             }
//         }
//         case actionType.DELETE_RESULT:{
//             //we CAN use this but fliter is more often used
//             // const id=2;
//             // const newArray=[...state.results];
//             // newArray.splice(id,1);
//             const id =2;
//             const updatedArray=state.results.filter((result)=>(result.id!==action.resultElId))
//             return{
//                 ...state,
//                 results:updatedArray
//             }
//         }
//         default:{
//             return state;
//         }
//     }
   
// }

// export default reducer; 