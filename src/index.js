import React from "react";
import ReactDOM from "react-dom";
//for creating and combining reducers
import { createStore, combineReducers } from "redux";

//connect redux to React
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});
const store = createStore(rootReducer);

//Provider help inject the store into the React components
//to hook up Provider with the store pass property store
//now the store is connected to the React App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
