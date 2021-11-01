import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { App } from './App';
import State from './context/State';

const client = new ApolloClient({
	uri: 'https://petgram-server-gabriel-vargas.vercel.app/graphql',
	request: operation => {
		const token = window.localStorage.getItem('token')
		const authorization = token ? `Bearer ${token}` :''
		operation.setContext({
			headers:{
				authorization
			}
		})
	},
	onError: error => {
		const {networkError} = error
		if(networkError && networkError.result.code === 'invalid_token'){
			window.localStorage.removeItem('token')
			window.location.href = '/'
		}
	}
})

ReactDOM.render(
	<State>
		<ApolloProvider client={client} >
			<App />
		</ApolloProvider>
	</State>,
	document.getElementById('app')
)