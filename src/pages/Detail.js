import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import {useGetSinglePhoto} from '../hooks/useGetSinglePhoto'
import { Item } from '../placeholders/ListOfPhotoCards/styles'
import {useParams } from 'react-router-dom'

export const Detail = () => {
	const {detailId} = useParams()
	const { loading, data, error } = useGetSinglePhoto(detailId)
	if (loading) return <Item><div></div></Item>
	if (error) return <p>Something went wrong!</p>
	return (
		<PhotoCard {...data.photo} />
	)
}