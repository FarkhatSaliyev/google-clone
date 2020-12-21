import React, { createContext, useReducer, useContext } from 'react'

// Data preparer  
export const StateContext = createContext()

//My high order component
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
) 

//Allows to pull information from data preparer
export const useStateValue = () => useContext(StateContext)