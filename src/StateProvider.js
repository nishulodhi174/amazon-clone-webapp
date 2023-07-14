import React, { createContext, useContext, useReducer } from "react";
// import PropTypes from "prop-types";


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// StateProvider.propTypes = {
//   reducer: PropTypes.func.isRequired,
//   initialState: PropTypes.object.isRequired,
//   children: PropTypes.node.isRequired,
// };

export const useStateValue = () => useContext(StateContext);


// // Prepares the dataLayer
// export const StateContext = createContext();

// // Wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// // Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);


//      _________________________________
//      |          Data Layer           |
//      |_______________________________|
//          |                       |
//          |sending                |receiving to any component
//          |Pushuing Process       |Pulling Process
//          |                       |
//      Add to Basket           Checkout