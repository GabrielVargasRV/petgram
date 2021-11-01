import React from 'react';
import { useGetFavorites } from '../../hooks/useGetFavs';
import { Link,Image,Grid } from './styles';


export const ListOfFavs = () => {
    const { data, loading, error } = useGetFavorites()
    if(loading) return 'loading...'
    if(error) return 'something went wrong'
    return (
        <Grid>
            {
                data.favs.map((fav) => (
                    <Link key={fav.id} to={`/detail/${fav.id}`} >
                        <Image src={fav.src} />
                    </Link>
                ))
            }
        </Grid>
    )
}