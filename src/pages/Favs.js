import React from 'react';
import { ListOfFavs } from '../components/listOfFavs';
import { Helmet } from 'react-helmet'

export const Favs = () => {
    return (
        <div>
            <Helmet>
                <title>Petgram - favoritos</title>
            </Helmet>
            <h1>Favs:</h1>
            <ListOfFavs />
        </div>
    )
}