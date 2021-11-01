import React,{useState,useContext} from 'react'
import Context from './context/Context'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

const UserLogged = (props) => {
	const {isAuth} = useContext(Context)
	if (isAuth) return props.children
	return <NotRegisteredUser/>
}

export const App = () => {

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Logo />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route excat path="/pet/:id" component={Home} />
				<Route exact path="/detail/:detailId" component={Detail}/>
				<Route exact path="/favs" >
					<UserLogged>
						<Favs/>
					</UserLogged>
				</Route>
				<Route exact path="/user">
					<UserLogged>
						<User/>
					</UserLogged>
				</Route>
				<Route component={NotFound} />
			</Switch>
			<NavBar/>
		</BrowserRouter>
	)
}