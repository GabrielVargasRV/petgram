import React from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { useMutationToogleLike } from '../../hooks/useMutationToggleLike';
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, liked,likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, element] = useNearScreen()
	const { mutation, mutationLoading, mutationError } = useMutationToogleLike()

	const handleFavClick = () => {
		mutation({
			variables:{
				input: {id}
			}
		})
	}

	return (
		<Article ref={element} >
			{show ? (
				<>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt="" />
						</ImgWrapper>
					</Link>
					<FavButton
						liked={liked}
						likes={likes}
						onClick={handleFavClick}
					/>
				</>
			) : <></>}
		</Article>
	)
}