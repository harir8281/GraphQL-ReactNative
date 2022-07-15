import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {useQuery, useLazyQuery} from "@apollo/client";
import {QUERY_ALL_USERS} from '../../graphQL/graphql';

const Home = () => {
  const {data, loading} = useQuery(QUERY_ALL_USERS);


  // const users = data?.GetAllUsers ?? [];

  // console.log(users)


  // if (data) {
  //   console.log(data);
  // }

  if (loading) {
    console.log('data is loading');
  }

  return (
    <View>
      <Text>List of users</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
