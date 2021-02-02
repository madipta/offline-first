import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: sans-serif;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
`;

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3333/graphql',
  }),
  cache: new InMemoryCache(),
});

export function App() {
  // window.addEventListener('load', function () {
  //   window.addEventListener('online', function (e) {
  //     console.log('online');
  //   });
  //   window.addEventListener('offline', function (e) {
  //     console.log('offline');
  //   });
  // });
  return (
    <ApolloProvider client={client}>
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </ApolloProvider>
  );
}

export default App;
