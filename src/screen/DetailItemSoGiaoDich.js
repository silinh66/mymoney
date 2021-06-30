import {debounce} from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';
import {Alert, Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {scale} from '../utils/formatSize';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from 'axios';
import {apiUrl} from '../constants/api';

export default class DetailItemSoGiaoDich extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      showAlert: false,
    };
  }

  componentDidMount() {
    this.setState({item: this.props.item});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (nextProps !== this.props) {
      if (!!nextProps.item) {
        this.setState({item: nextProps.item});
      }
    }
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  onCancel = () => {
    this.setState({
      showAlert: false,
    });
  };

  onConfirm = () => {
    axios
      .delete(`${apiUrl}/mymoney?data_id=${this.state.item.id}`)
      .then(res => {
        console.log('res', res.data);
        if (res.data.error === false) {
          setTimeout(() => Alert.alert('', 'Xoá giao dịch thành công'), 500);
          Keyboard.dismiss();
          Navigation.pop(this.props.componentId);
          this.props.getData();
          // this.gotoScreen('navigation.SoGiaoDich');
        }
      })
      .catch(e => {
        console.log('Error', e);
        setTimeout(() => Alert.alert(e), 500);
      });
    this.setState({
      showAlert: false,
    });
  };

  onGetEditData = item => {
    this.setState({item});
  };

  render() {
    console.log('this.props', this.props);
    const {item, showAlert} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#003f5c'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 20,
          }}>
          <TouchableOpacity
            onPress={debounce(() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'navigation.Edit',
                  passProps: {
                    item,
                    getData: this.props.getData,
                    onGetEditData: this.onGetEditData,
                  },
                },
              });
            }, 300)}
            style={{
              backgroundColor: '#fb5b5a',
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.showAlert();
            }}
            style={{
              backgroundColor: '#fb5b5a',
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
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
            }}>
            {item.description}
          </Text>
          <Text
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
            }}>
            {item.money}
          </Text>
          <Text
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
            }}>
            {item.type === 0 ? 'Thu' : 'Chi'}
          </Text>
          <Text
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
            }}>
            {moment(item.date).format('DD/MM/YYYY')}
          </Text>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title=""
          message="Bạn có chắc muốn xoá giao dịch này?!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.onCancel();
          }}
          onConfirmPressed={() => {
            this.onConfirm();
          }}
        />
      </View>
    );
  }
}
