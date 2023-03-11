import React,{createContext,useContext,useReducer} from "react";

//Prepares the data layar
export const StateContext=createContext();

//Wrap our app and provide the Data layar
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    );

//pull information from the data layar
export const useStateValue=()=> useContext(StateContext);
