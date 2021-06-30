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

  componentDidMount() {
    this.getData();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getData();
      if (nextProps.date === '202106') {
        this.getData();
      }
    }
  }

  getData = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/mymoney?user_id=1&date=${this.props.date}`,
      );
      const data = get(res, 'data.data');
      const groupData = groupBy(data, 'date');
      const groupDataFinal = Object.values(groupData);
      this.setState({data: groupDataFinal});
    } catch (error) {
      console.log('Error', error);
    }
  };

  render() {
    const {index} = this.props;

    const {data} = this.state;
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        {!isEmpty(data) ? (
          map(data, (item, index) => {
            return (
              <ItemSoGiaoDich
                componentId={this.props.componentId}
                itemInfo={item}
                key={index}
                getData={this.getData}
              />
            );
          })
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginTop: 200,
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
              Không có dữ liệu
            </Text>
          </View>
        )}
      </View>
    );
  }
}
