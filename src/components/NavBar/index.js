import React from 'react';
import { Nav,Link } from './styles';
import {MdHome,MdFavorite,MdPerson} from 'react-icons/md'
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

const SIZE = '32px'


export const NavBar = () => {
    const {path} = useCurrentLocation()
    return(
        <Nav>
            <Link className={[path === '/' ? 'current':'']}  to="/" ><MdHome size={SIZE} /></Link>
            <Link className={[path === '/favs' ? 'current' :'' ]} to="/favs" ><MdFavorite size={SIZE} /></Link>
            <Link className={[path === '/user' ? 'current': '']} to="user" ><MdPerson size={SIZE} /></Link>
        </Nav>
    )
}