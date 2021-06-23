import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RadioButton from '../components/RadioButton';
import {hScale, scale} from '../utils/formatSize';
import DatePicker from 'react-native-date-picker';
import ModalDateTimeBase from '../components/ModalDateTimeBase';
import moment from 'moment';
import axios from 'axios';
import {apiUrl} from '../constants/api';

const _hScale = hScale(1, 1);

export default class ModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: '',
      type: 0,
      description: '',
      date: null,
      valueStatus: '',
      valueDateTime: new Date(),
      showModal: false,
    };
  }

  onConfirm = () => {
    const {money, valueStatus, description, valueDateTime} = this.state;
    const body = [
      null,
      valueStatus,
      parseInt(money),
      description,
      moment(valueDateTime).format('YYYY-MM-DD'),
      1,
    ];
    console.log('body', body);
    axios
      .post(`${apiUrl}/mymoney/add`, body)
      .then(res => {
        console.log('res', res.data);
      })
      .catch(e => {
        console.log('Error', e);
      });
  };

  openCloseModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

  onSubmitHenNhan = dateNow => {
    console.log('dateNow', dateNow);
    this.setState({valueDateTime: dateNow});
  };

  setMoney = value => {
    this.setState({money: value});
  };

  setDescription = value => {
    this.setState({description: value});
  };

  getRadioData = value => {
    this.setState({valueStatus: value});
  };

  render() {
    const {
      money,
      type,
      description,
      date,
      valueStatus,
      showModal,
      valueDateTime,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <TextInput
          // multiline
          value={money}
          placeholder="Nhập số tiền"
          style={{
            margin: scale(10),
            // height: scale(32),

            borderWidth: 1,
            borderColor: '#B2BCC8',
            backgroundColor: '#FFFFFF',
            borderRadius: scale(8),
            paddingHorizontal: scale(20),
            fontFamily: 'CoreSansGS-45Regular',
            fontSize: scale(15),
            lineHeight: scale(24),
            padding: scale(7),
          }}
          onChangeText={this.setMoney}
          keyboardType="numeric"
          maxLength={15}
        />
        <RadioButton
          PROP={[
            {id: 0, text: 'Khoản chi'},
            {id: 1, text: 'Khoản thu'},
          ]}
          getValue={this.getRadioData}
          value={valueStatus}
        />
        <TextInput
          // multiline
          value={description}
          placeholder="Nhập mô tả"
          style={{
            margin: scale(10),
            // height: scale(32),

            borderWidth: 1,
            borderColor: '#B2BCC8',
            backgroundColor: '#FFFFFF',
            borderRadius: scale(8),
            paddingHorizontal: scale(20),
            fontFamily: 'CoreSansGS-45Regular',
            fontSize: scale(15),
            lineHeight: scale(24),
            padding: scale(7),
          }}
          onChangeText={this.setDescription}
          maxLength={255}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            margin: scale(10),
            alignContent: 'center',
          }}
          onPress={() => {
            this.openCloseModal();
          }}>
          <Text
            allowFontScaling={false}
            style={{
              //   margin: scale(10),
              // height: scale(32),

              borderWidth: 1,
              borderColor: '#B2BCC8',
              backgroundColor: '#FFFFFF',
              borderRadius: scale(8),
              paddingHorizontal: scale(20),
              fontFamily: 'CoreSansGS-45Regular',
              fontSize: scale(15),
              lineHeight: scale(24),
              padding: scale(7),
            }}>
            {moment(valueDateTime).format('DD/MM/YYYY')}
          </Text>
          <Image
            style={{
              height: _hScale * 24,
              width: _hScale * 24,
            }}
            source={require('../resources/datetime.png')}
          />
          <Text
            allowFontScaling={false}
            style={{
              marginLeft: _hScale * 4,
              fontSize: scale(13),
              lineHeight: _hScale * 24,
              color: '#666666',
            }}>
            Chọn ngày
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onConfirm}
          style={{
            margin: scale(10),
            height: _hScale * 42,
            marginVertical: _hScale * 8,
            backgroundColor: '#17B7BD',
            borderRadius: _hScale * 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: _hScale * 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{
              fontSize: scale(14),
              lineHeight: scale(18),
              color: '#ffffff',
            }}>
            XÁC NHẬN
          </Text>
        </TouchableOpacity>

        <ModalDateTimeBase
          showModal={showModal}
          openCloseModal={this.openCloseModal}
          onSubmit={this.onSubmitHenNhan}
        />
      </View>
    );
  }
}
