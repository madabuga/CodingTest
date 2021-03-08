import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Posts from './components/Posts';
import './App.css';

const client = new ApolloClient({
  uri: "https://fakerql.stephix.uk/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Posts />
    </div>
  </ApolloProvider>
)

export default App;
