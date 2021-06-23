import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import ModalBottomPopup from '../ModalBottomPopup';

export default class ModalDateTimeBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueDateTime: new Date(),
    };
  }

  onSubmit = () => {
    // if (!this.props.disableMininumDate) {
    //   if (this.state.valueDateTime.getTime() > new Date().getTime()) {
    //     const date = this.state.valueDateTime;
    //     this.props.onSubmit(date);
    //   } else {
    //     Alert.alert(
    //       '',
    //       'Thời gian hẹn nhận phải lớn hơn thời gian hiện tại!!!',
    //     );
    //   }
    // } else {
    const date = this.state.valueDateTime;
    this.props.onSubmit(date);
    this.onClose();
    // }
    // console.log(moment(valueDateTime).date()+ "/" +moment(valueDateTime).month() + "/" + moment(valueDateTime).year() +" " + moment(valueDateTime).hour() + ":" +moment(valueDateTime).minute() );
  };

  onClose = () => {
    this.setState({valueDateTime: new Date()});
    this.props.openCloseModal();
  };
  render() {
    return (
      <ModalBottomPopup visible={this.props.showModal} onDismiss={this.onClose}>
        <View style={styles.container}>
          <Text allowFontScaling={false} style={styles.textLydo}>
            {this.props.title ? this.props.title : 'Chọn thời gian hẹn nhận'}
          </Text>
          <DatePicker
            // minimumDate={this.props.disableMininumDate ? true : new Date()}
            style={{alignSelf: 'center'}}
            mode={this.props.disableShowTime ? 'date' : 'datetime'}
            androidVariant="iosClone"
            date={this.state.valueDateTime}
            onDateChange={value => {
              this.setState({valueDateTime: moment(value).toDate()});
            }}
          />
          <TouchableOpacity style={styles.btnXacNhan} onPress={this.onSubmit}>
            <Text allowFontScaling={false} style={styles.labelXacNhan}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
      </ModalBottomPopup>
      // </Modal>
    );
  }
}
