import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
	align-items: center;
  width: 100%;
	&::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
    border: 2px solid #f1f1f1;
		background-color: #f1f1f1;
    /* box-shadow: 0px 5px 8px rgba(0,0,0,.1); */
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    height: 75px;
    width: 75px;
		margin: 5px;
`