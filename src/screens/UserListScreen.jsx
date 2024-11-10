import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loader from '../components/Loader';

const UserListScreen = () => {
  // Contexte abone olmak için useContext hooku kullanılır. useContext içerisine
  // verilerini getirir.
  const {loading, error, users} = useContext(UserContext);
  console.log(users);
  return (
    <View>
      <Text>UserListScreen</Text>
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({});
