import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';
import {useContext} from 'react';

const UserDetailScreen = () => {
  const navigation = useNavigation();
  // UserListScreen'den gelen Id'yı useRoute üzerinden direk aldık
  const route = useRoute();
  const {userId} = route.params;
  // console.log(userId);
  // useContext kullanarak userContext'e abone olduk
  const {users} = useContext(UserContext);

  //user dizisi içerisinde userDetaılScreen ekranına gönderdiğmiz id ile birleşen veriyi getirdik
  const user = users.find(user => user.id === userId);
  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>{user.phone}</Text>
        <Button
          title="Wiew Tasks"
          onPress={() => navigation.navigate('Task', {userId})}
        />
      </View>
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#EEEDEB',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 15,
    marginBottom: 5,
  },
});
