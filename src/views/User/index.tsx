import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  useColorScheme
} from 'react-native';
import { UserStyles } from './Styles/UserStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IUser } from '../../interfaces/IUser';

import { getUserList } from '../../redux/reducers/userReducer';
import Axios from 'axios-observable';
import { Env } from '../../../environment';

export const User = (props: any) => {

  const isDarkMode = useColorScheme() === 'dark';

  const users = useSelector((state) => state.users.userList);

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


  return (
    <>
      {
        users && users.map((user: any, index: number) => (
          <View key={index} style={UserStyles.sectionContainer}>
            <Text
              style={[
                UserStyles.sectionTitle,
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                },
              ]}>
              {user.id}
            </Text>
            <Text
              style={[
                UserStyles.sectionDescription,
                {
                  color: isDarkMode ? Colors.light : Colors.dark,
                },
              ]}>
              {user.login}
            </Text>
          </View>
        ))
      }
    </>
  );
};