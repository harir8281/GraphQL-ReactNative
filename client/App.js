import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

//screens
import Home from './screens/Home';

const Stack = createStackNavigator();

function TheStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});
 
const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
    <NavigationContainer>
      <TheStack />
    </NavigationContainer>
    </ApolloProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
