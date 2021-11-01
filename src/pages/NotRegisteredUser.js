import React,{useContext,useState,useEffect} from 'react';
import { UserForm } from '../components/UserForm';
import Context from '../context/Context';
import { useRegisterMutation } from '../hooks/useMutationSignup';
import { useLoginMutation } from '../hooks/useMutationLogin';
import { Error } from '../components/UserForm/styles';

export const NotRegisteredUser = () => {
    const {resgisterMutation} = useRegisterMutation()
    const { loginUser, data: dataLog, error: errorLog, loading: loadingLog } = useLoginMutation()
    const {setAuth} = useContext(Context)
    const [errorMsg,setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false)

    const signup = (e,email,password) => {
        setLoading(true)
        e.preventDefault()
        const input = {email,password}
        const variables = {input}
        resgisterMutation({variables})
        .then((data) =>  {
            setAuth(data.data.signup)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setErrorMsg('User already exist!')
        })
    }

    const login = (e,email,password) => {
        e.preventDefault()
        setLoading(true)
        loginUser(email,password)
        .then(data => {
            setLoading(false)
            setAuth(data.data.login)
        })
        .catch((error) => {
            setLoading(false)
            setErrorMsg('Invalid Credentials')
        })
    }

    useEffect(() => {
        if(errorMsg) {
            setTimeout(() => setErrorMsg(null),5000)
        }
    },[errorMsg])


    return (
        <>
            <h2>Acceso</h2>
            <p>Para acceder a esta seccion debes haber iniciado sesion</p>
            <UserForm
                title={'Register'}
                onSubmit={signup}
                disabled={loading}
            />
            <UserForm
                title={'Iniciar Sesion'}
                onSubmit={login}
                disabled={loading}
            />
            {errorMsg ? <Error>{errorMsg}</Error> : <></>}
        </>
    )
}