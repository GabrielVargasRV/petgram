import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router'
import {Helmet} from 'react-helmet'

export const Home = () => {
	const {id} = useParams()

	return (
		<>
			<Helmet>
				<title>Petgram - fotos de mascotas</title>
				<meta name="description" content="en petgram puedes encontrat fotos de animales domesticos"/>
			</Helmet>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={id} />
		</>
	)
}