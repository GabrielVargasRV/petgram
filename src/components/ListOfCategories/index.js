import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import { PlaceHolder_ListOfCategories } from '../../placeholders/ListOfCategories'

function useCategoryData() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		fetch('https://petgram-server-gabriel-vargas.vercel.app/categories')
			.then(res => res.json())
			.then(res => {
				setCategories(res)
				setLoading(false)
			})
	}, [])
	return { categories, loading }
}

const ListOfCategoriesComponent = () => {
	const { categories, loading } = useCategoryData()
	const [showFixed, setShowFixed] = useState(false)

	useEffect(() => {
		const onScroll = (e) => {
			if (!document.querySelector('.normal').getBoundingClientRect()) return
			const top = document.querySelector('.normal').getBoundingClientRect().top
			top < -100 && !showFixed ? setShowFixed(true) : setShowFixed(false)
		}
		document.addEventListener('scroll', onScroll, false)

		return () => document.removeEventListener('scroll', onScroll)
	}, [])

	const renderList = (fixed) => (
		<List className={fixed ? 'fixed' : 'normal'} >
			{
				categories.map((category, index) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
			}
		</List>
	)

	if (loading) return <PlaceHolder_ListOfCategories />

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	)
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)