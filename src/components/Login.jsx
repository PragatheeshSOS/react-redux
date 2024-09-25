import React from "react";
import {useRef} from "react";
import {useDispatch} from 'react-redux'
import {login,logout} from "../redux/userSlice"

const Login = () => {
    const dispatch = useDispatch()
    const uname = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({
            name: uname.current.value
        }))
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="text" name="Name" id="" ref={uname} required />
                <button type="Submit">Login</button>
            </form>
            <button onClick={() => dispatch(logout)}>Log Out</button>
        </>
    )
}

export default Login