import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button,Title } from './styles';

export const UserForm = ({ onSubmit, title = '',disabled}) => {
    const email = useInputValue('')
    const password = useInputValue('')


    return (
        <>
            <Form  disabled={disabled} onSubmit={(e) => onSubmit(e,email.value,password.value)}>
                <Title>{title}</Title>
                <Input disabled={disabled} type="text" placeholder="Email" {...email} />
                <Input disabled={disabled} type="password" placeholder="Password" {...password} />
                <Button disabled={disabled} type="submit" >{disabled ? 'Loading..' : title}</Button>
            </Form>
        </>
    )
}