import {get, map} from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {formatNumber} from '../utils/common';

export default class ItemSoGiaoDich extends Component {
  render() {
    const {itemInfo} = this.props;
    let sum = 0;
    for (let i = 0; i < itemInfo.length; i++) {
      if (itemInfo[i].type === 0) {
        sum -= itemInfo[i].money;
      } else if (itemInfo[i].type === 1) {
        sum += itemInfo[i].money;
      }
    }
    // console.log('sum', sum);
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        {map(itemInfo, (item, index) => {
          return (
            <View key={index}>
              {index === 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}>
                  <Text>{moment(get(item, 'date')).format('DD/MM/YYYY')} </Text>
                  <Text>{formatNumber(sum)}</Text>
                </View>
              ) : null}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}>
                <Text>{get(item, 'description')} </Text>
                <Text
                  style={{color: get(item, 'type') === 0 ? 'red' : 'green'}}>
                  {formatNumber(get(item, 'money'))}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
