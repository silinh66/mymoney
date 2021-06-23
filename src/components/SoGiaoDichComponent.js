import axios from 'axios';
import {get, groupBy, isEmpty, map} from 'lodash';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {apiUrl} from '../constants/api';
import {scale} from '../utils/formatSize';
import ItemSoGiaoDich from './ItemSoGiaoDich';

export default class SoGiaoDichComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/mymoney?user_id=1&date=${this.props.date}`,
      );
      // console.log('res', res.data);
      const data = get(res, 'data.data');
      const groupData = groupBy(data, 'date');
      const groupDataFinal = Object.values(groupData);
      // console.log('groupdData', groupDataFinal);
      this.setState({data: groupDataFinal});
    } catch (error) {
      console.log('Error', error);
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      // console.log('nextProps', nextProps);
      this.getData();
    }
  }

  render() {
    const {index} = this.props;
    const {data} = this.state;
    // console.log('data', data);
    return (
      <View style={{flex: 1}}>
        {!isEmpty(data) ? (
          map(data, (item, index) => {
            return <ItemSoGiaoDich itemInfo={item} key={index} />;
          })
        ) : (
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
              source={require('../resources/No_data.png')}
              style={{width: scale(162), height: scale(162)}}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 15,
                lineHeight: 22,
                color: '#342A2A',
              }}>
              Không có dữ liệu
            </Text>
          </View>
        )}
      </View>
    );
  }
}
