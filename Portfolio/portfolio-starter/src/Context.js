// import { createContext , useReducer } from "react";

// export const theme = createContext();

// const initialValue = {darkmode : true};

// const themeReducer = (state , action) => {

//     switch(action.type)
//     {
//         case 'toggle' :
//             return {darkmode : !state.darkmode};
//         default :
//             return state
//     }
// }

// export const ThemeProvider = (props) => {
//     const [state , setState] = useReducer (themeReducer , initialValue);
//     return (
//         <theme.Provider value={{state , setState}}>
//             {props.children}
//         </theme.Provider>
//     )
// }

import { createContext , useReducer } from "react";

// creating a context for storing global value
export const themeContext = createContext();

const initialState = {darkMode : false};

// reducer method to change mode
const themeReducer = (value , action) => {
    switch(action.type)
    {
        case 'toggle' :
            return {darkMode : !value.darkMode}
        
            default :
                return value
    }
}

// the provider tag returns that store or change value using reducer
export const ThemeProvider = (props) => {
    const [state , setState] = useReducer(themeReducer , initialState);
    return (
        <themeContext.Provider value={{state , setState}}>
            {props.children}
        </themeContext.Provider>
    )
}