// import * as React from "react";
// import { Component } from "react";
// import Counter from "./containers/screens/counter";
// import reducers from "./reducers";
// import { Provider, connect } from "react-redux";
// import { createStore, applyMiddleware, compose} from "redux";
// import thunkMiddleware from "redux-thunk";
// import * as createLogger from "redux-logger";
// // import devTools from "remote-redux-devtools";
// import {fromJS} from "immutable";

// function configureStore(initialState: any) {
//   const enhancer = compose(
//     applyMiddleware(thunkMiddleware),
//       // devTools()
//   );
//   return createStore(reducers, initialState, enhancer);
// }
// let initialState = fromJS({});
// const store = configureStore(initialState);

// const App = () => (
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );

// export default App;
