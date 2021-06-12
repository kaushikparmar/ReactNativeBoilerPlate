import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  Button,
  useColorScheme,
  FlatList
} from 'react-native';
import { UserStyles } from './Styles/UserStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { getUserList, removeLastUser } from '../../redux/reducers/userReducer';
import Axios from 'axios-observable';
import { Env } from '../../../environment';

export const User = (props: any) => {

  const isDarkMode = useColorScheme() === 'dark';

  const users = useSelector((state: any) => state.users.userList);

  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`${Env.URL}/users`).subscribe(
      (response: any) => {
        dispatch(getUserList(response.data));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const renderItem = ({ item }) => {
    // console.log('item', item.id + ' ' + item.login)
    return (
      <View key={item.id} style={UserStyles.sectionContainer}>
        <Text
          style={[
            UserStyles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {item.id}
        </Text>
        <Text
          style={[
            UserStyles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {item.login}
        </Text>
      </View>
    )
  };


  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={(event) => {
          console.log('event', event.nativeEvent);
          console.log('event', event.nativeEvent.contentOffset.x + '  ' + event.nativeEvent.contentOffset.y);
        }}
      />
      <Button title="Remove Last User" onPress={() => dispatch(removeLastUser())}>Remove Last User</Button>
    </View>
  );
};
