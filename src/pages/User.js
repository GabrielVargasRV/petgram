import React, { useContext } from 'react';
import Context from '../context/Context'
import { Button } from '../components/UserForm/styles';

export const User = () => {
    const { setAuth } = useContext(Context)
    return (
        <>
            <h1>User</h1>
            <Button onClick={() => setAuth(null)} >Cerrar Sesion</Button>
        </>
    )
}