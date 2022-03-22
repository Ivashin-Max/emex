import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from "react-redux";
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, DefaultOptions, } from "@apollo/client";
import url from './static/url.json'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: url.gqlUrl,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


