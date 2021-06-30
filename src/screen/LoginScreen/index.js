import axios from 'axios';
import {get} from 'lodash';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  // AsyncStorage,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigation} from 'react-native-navigation';
import {apiUrl} from '../../constants/api';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  async componentDidMount() {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      if (user_id !== null) {
        this.onLoginSuccess();
      }
    } catch (e) {
      console.log('error', e);
    }
  }

  onLoginSuccess = () => {
    Navigation.setRoot({
      root: {
        /*-----------------So giao dich-------------------*/
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'SoGiaoDich',
                      name: 'navigation.SoGiaoDich',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('../../resources/checklist.png'),
                    backgroundColor: 'red',
                    text: 'Sổ giao dịch',
                  },
                  topBar: {
                    visible: false,
                  },
                  statusBar: {
                    drawBehind: true,
                    backgroundColor: 'transparent',
                  },
                },
              },
            },

            /*-----------------Bao cao-------------------*/
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'BaoCao',
                      name: 'navigation.BaoCao',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('../../resources/baocao.png'),
                    backgroundColor: 'red',
                    text: 'Báo cáo',
                  },
                  topBar: {
                    visible: false,
                  },
                },
              },
            },

            /*-----------------Add Button-------------------*/
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'ModalAdd',
                      name: 'navigation.ModalAdd',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('../../resources/plus.png'),
                    backgroundColor: 'red',
                    text: 'Thêm',
                  },
                  topBar: {
                    visible: false,
                  },
                },
              },
            },

            /*-----------------Lap Ke Hoach-------------------*/
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'LapKeHoach',
                      name: 'navigation.LapKeHoach',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('../../resources/lapKeHoach.png'),
                    backgroundColor: 'red',
                    text: 'Lập kế hoạch',
                  },
                  topBar: {
                    visible: false,
                  },
                },
              },
            },

            /*----------------Tai Khoan--------------------*/
            {
              stack: {
                id: 'PROFILE_TAB',
                children: [
                  {
                    component: {
                      id: 'TaiKhoan',
                      name: 'navigation.TaiKhoan',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('../../resources/User.png'),
                    backgroundColor: 'red',
                    text: 'Tài khoản',
                  },
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  };

  onPressLogin = async () => {
    const {username, password} = this.state;
    console.log('username', username);
    console.log('password', password);
    try {
      const res = await axios.get(
        `${apiUrl}/login?username=${username}&password=${password}`,
      );
      const data = get(res, 'data.data');
      console.log('data', data);
      console.log('id', get(data, '[0].user_id'));
      try {
        await AsyncStorage.setItem(
          'user_id',
          JSON.stringify(get(data, '[0].user_id')),
        );
      } catch (e) {
        // saving error
      }
      if (get(data, '[0].count') === 1) {
        this.onLoginSuccess();
      } else {
        Alert.alert('', 'Tài khoản hoặc mật khẩu không chính xác');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  onSignup = async () => {
    const {username, password} = this.state;
    console.log('username', username);
    console.log('password', password);
    try {
      const res = await axios.get(
        `${apiUrl}/register?username=${username}&password=${password}`,
      );
      const data = get(res, 'data.data');
      Alert.alert('', 'Đăng ký thành công');
      this.setState({username: '', password: ''});
    } catch (error) {
      console.log('Error', error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>MoneyAPP</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity>
          {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.onPressLogin();
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onSignup}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
