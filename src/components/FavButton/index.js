import React from 'react'
import { MdOutlineFavoriteBorder,MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({liked,likes,onClick}) => {
	const Icon = liked ? <MdFavorite size="32px" /> : <MdOutlineFavoriteBorder size="32px" />
	return (
		<Button onClick={onClick} >
			{Icon}{likes} likes
		</Button>

	)
}
