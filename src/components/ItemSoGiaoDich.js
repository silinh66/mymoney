import {debounce, get, map} from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {formatNumber} from '../utils/common';

export default class ItemSoGiaoDich extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInfo: [],
    };
  }

  componentDidMount() {
    // console.log('this.props', this.props);
    if (!!this.props.itemInfo) {
      this.setState({itemInfo: this.props.itemInfo});
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    if (this.props !== nextProps) {
      if (!!nextProps.itemInfo && nextProps.itemInfo !== this.props.itemInfo) {
        this.setState({itemInfo: nextProps.itemInfo});
      }
    }
  }

  render() {
    // console.log('this.state.itemInfo', this.state.itemInfo);
    const {itemInfo} = this.state;
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
          backgroundColor: '#fb5b5a',
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          borderWidth: 1,
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
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {moment(get(item, 'date')).format('DD/MM/YYYY')}{' '}
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    {formatNumber(sum)}
                  </Text>
                </View>
              ) : null}
              <TouchableOpacity
                onPress={debounce(() => {
                  console.log('pressed');
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'navigation.Detail',
                      passProps: {
                        item,
                        getData: this.props.getData,
                      },
                    },
                  });
                }, 300)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  {get(item, 'description')}{' '}
                </Text>
                <Text
                  style={{
                    color: get(item, 'type') === 0 ? 'black' : 'yellow',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  {`${get(item, 'type') === 0 ? '-' : ''} ${formatNumber(
                    get(item, 'money'),
                  )}`}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
