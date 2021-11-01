import React,{useState,useEffect} from 'react';
import Context from './Context';

const State = (props) => {
    const initialState = {
        isAuth:false
    }

    const [state,setState] = useState(initialState)

    const setAuth = (value) => {
        setState({
            ...state,
            isAuth:value
        })
        if(value) window.localStorage.setItem('token',value);
        else window.localStorage.removeItem('token')
    }

    useEffect(() => {
        const loginToken = window.localStorage.getItem('token')
        setState({
            ...state,
            isAuth:loginToken
        })
    },[])

    return(
        <Context.Provider
            value={{
                ...state,
                setAuth
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default State;