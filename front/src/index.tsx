import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from "react-redux";
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import url from './static/url.json'

const client = new ApolloClient({
  uri: url.gqlUrl,
  cache: new InMemoryCache(),
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


