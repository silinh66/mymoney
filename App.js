import axios from 'axios';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {apiUrl} from './src/constants/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/mymoney?user_id=1`);
      console.log('res', res.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  render() {
    const {data} = this.state;
    console.log('data', data);
    return (
      <View>
        <Text> Hello Linh</Text>
      </View>
    );
  }
}
