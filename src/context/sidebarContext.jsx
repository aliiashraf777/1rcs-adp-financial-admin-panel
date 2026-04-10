import { createContext, useReducer } from "react";
// import sidebarReducer from '../reducer/sidebarReducer';
import PropTypes from 'prop-types';
 
// Global state via Context & useReducer
// e.g. Dark / light theme, authentication status
// Reducers + Context API make Redux - like global state without external library

export const SidebarContext = createContext({});

{/*
    Why Separate UIProvider from <UIContext.Provider>?

    If we directly used <UIContext.Provider> in App.js, we’d have to manually manage useReducer there.

    By wrapping it inside UIProvider, we:

    Keep state logic isolated in one file

    Avoid repeating reducer setup in multiple places

    Make it reusable (you can wrap any app or page with it)    
*/}
export const SidebarProvider = ({ children }) => {
    {/* 
        {children} is a special prop in React that represents whatever JSX you wrap inside <UIProvider> ... </UIProvider>

        This lets us inject UI state anywhere without hardcoding specific components inside the provider.
    */}


    const initialState = {
        // isSidebarOpen: false
        isSidebarOpen: true,
    }
    // console.log(state); 

    const sidebarReducer = (state, action) => {
        // if action.type === 'toggle_sidebar'
        if (action.type === 'TOGGLE_SIDEBAR') {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,

                // React re-renders all components that consume the context, now with the updated isSidebarOpen state value.
            }
        }

        // if action.type somethign except 'toggle_sidebar'
        throw new Error(`No matching "${action.type}" action type`)
    }

    const toggleSidebar = () => {
        dispatch({
            type: 'TOGGLE_SIDEBAR'
        })
    }

    const [state, dispatch] = useReducer(sidebarReducer, initialState);

    return (
        <SidebarContext.Provider
            value={{
                ...state,
                toggleSidebar
            }}
        >
            {children}

            {/*
                In React, every component can receive a special prop called children.

                It contains whatever you place between a component’s opening and closing tags. 

                ← renders <App /> here, so the whole app is inside the provider
            */}
        </SidebarContext.Provider>
    )
}

// SidebarProvider.PropTypes = {
SidebarProvider.propTypes = {
    children: PropTypes.node
}