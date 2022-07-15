import React from "react";
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"
import DislayData from "./pages/DislayData";
import './App.css'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client} >
      <div>
      <DislayData/>
      </div>
    </ApolloProvider>
  );
}

export default App;
