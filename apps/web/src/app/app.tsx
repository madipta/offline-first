import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import styled from 'styled-components';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import { DonasiSumProvider } from './app.context';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3333/graphql',
  }),
  cache: new InMemoryCache(),
});

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: sans-serif;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
`;

export function App() {
  return (
    <DonasiSumProvider>
      <ApolloProvider client={client}>
        <StyledApp>
          <Header />
          <Main />
          <Footer />
        </StyledApp>
      </ApolloProvider>
    </DonasiSumProvider>
  );
}

export default App;
