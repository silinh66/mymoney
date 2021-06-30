import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {scale} from '../utils/formatSize';

export default class BaoCao extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#003f5c', flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Image
            source={require('../resources/No_data.png')}
            style={{width: scale(162), height: scale(162)}}
          />
          <Text
            allowFontScaling={false}
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: 'white',
            }}>
            Đang phát triển
          </Text>
        </View>
      </View>
    );
  }
}
