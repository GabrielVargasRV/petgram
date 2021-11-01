import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Form = styled.form`
    padding: 16px 10px;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled]{
        opacity:.3;
    }
`

export const Button = styled.button`
    background-color: #8d00ff;
    border-radius: 3px;
    color:  #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    border-style: none;
    &[disabled]{
        opacity:.3;
    }
`

export const Title = styled.h2`
    margin-bottom: 5px;
`

export const Error = styled.div`
    width: 300px;
    height: 40px;
    background-color: red;
    border-radius: 3px;
    color: white;
    margin: 0 auto;
    text-align: center;
    padding: 8px 0;
    font-weight: bold;
    ${fadeIn({time:'0.5s'})};
`