import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { List } from './styles'
import { useGetPhotos } from '../../hooks/useGetPhotos';
import { PlaceHolder_ListOfPhotoCards } from '../../placeholders/ListOfPhotoCards';

export const ListOfPhotoCards = ({categoryId}) => {
	const {loading,error,data} = useGetPhotos(categoryId)

	if(loading) return <PlaceHolder_ListOfPhotoCards/>
	if(error) return <p>Something went wrong!</p>
	return (
		<List>
			{
				data.photos.map((photoCard) => (< PhotoCard key={photoCard.id} {...photoCard} />))
			}
		</List>
	)
}


