import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { AppShell, Footer, Header, MantineProvider } from '@mantine/core';
import AppFooter from './footer/footer';
import AppHeader from './header/header';
import AppMain from './main/main';
import { DonasiSumProvider } from './app.context';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3333/graphql',
  }),
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <DonasiSumProvider>
      <ApolloProvider client={client}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            footer={
              <Footer
                height={54}
                sx={(theme) => ({
                  backgroundColor: theme.colors.gray[0],
                  borderTopColor: theme.colors.gray[2],
                  borderTopStyle: 'solid',
                  borderTopWidth: '1px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingTop: '4px',
                })}
              >
                <AppFooter></AppFooter>
              </Footer>
            }
            header={
              <Header
                height={52}
                sx={(theme) => ({
                  alignItems: 'center',
                  backgroundColor: theme.colors.teal[9],
                  color: '#fff',
                  display: 'flex',
                  fontSize: '1.8rem',
                  lineHeight: '52px',
                  padding: '0 16px 2px',
                })}
              >
                <AppHeader></AppHeader>
              </Header>
            }
          >
            <AppMain></AppMain>
          </AppShell>
        </MantineProvider>
      </ApolloProvider>
    </DonasiSumProvider>
  );
}

export default App;
