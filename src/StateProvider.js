//DATA LAYERS / CONTEXT API / REDUX
import React ,{ createContext, useContext, useReducer} from 'react';

//Prepares the Data Layer
export const StateContext= createContext();

// Wrap our App and provide the Data layer to all our components so now all components can have access tp the data layer
export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} {/*Main APP in index.js */}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue=()=>useContext(StateContext);