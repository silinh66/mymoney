import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class TaiKhoan extends Component {
  onLogout = async () => {
    try {
      await AsyncStorage.removeItem('user_id');
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'navigation.Login',
                  passProps: {
                    text: 'This is tab 1',
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Tab 1',
                // icon: require('../images/one.png'),
                // testID: 'FIRST_TAB_BAR_BUTTON'
              },
              topBar: {
                visible: false,
              },
            },
          },
        },
      });
    } catch (e) {
      console.log('error', e);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#003f5c',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '80%',
            backgroundColor: '#fb5b5a',
            borderRadius: 25,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 10,
          }}
          onPress={() => {
            this.onLogout();
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
