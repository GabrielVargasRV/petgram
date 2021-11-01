import styled from 'styled-components'

export const List = styled.ul`
    padding: 0 15px 0 15px;
`

export const Item = styled.div`
    width: 100%;
    margin-top: 15px;
    border-radius: 10px;
    height: 0;
    overflow: hidden;
    padding:56.25% 0 0 0;
    position: relative;
    background-color: #f1f1f1;
    & div{
        width: 80px;
        height: 15px;
        background-color: #f1f1f1;
        border-radius: 5px;
        display: block;
    }
`