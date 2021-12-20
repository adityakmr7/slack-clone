import React, { createContext, useContext, useEffect, useReducer } from "react";

import {reducer, initialState} from './reducer';
export const StateContext = createContext();

export const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={{state,dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
