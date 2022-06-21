import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import RenderComponent from "./components/RenderComponent";

function App() {
  const client = new ApolloClient({
    uri:  'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <RenderComponent />
    </ApolloProvider>
  );
}

export default App;
