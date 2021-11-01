import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    border-style: none;
    background-color: transparent;

    & svg{
        margin-right: 4px;
        margin-left: 5px;
        border-radius: 50%;
        border: 1px solid #fafafa;
        background-color: #fafafa;
        box-shadow: 0 0px 16px rgba(0,0,0,.1);
    }
`