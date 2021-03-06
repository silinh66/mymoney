import ViewPager from '@react-native-community/viewpager';
import {map} from 'lodash';
import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SoGiaoDichComponent from '../../components/SoGiaoDichComponent';
import {listViewPagers} from '../../utils/common';
import styles from './styles';

export default class SoGiaoDich extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
      statusBar: {
        backgroundColor: 'white',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      pageCur: 19,
      isFirst: true,
    };
    this.viewPager = React.createRef();
    this.srollview = React.createRef();
  }

  componentDidMount() {
    this.onPress(18);
  }

  onPress = index => {
    this.viewPager.current.setPage(index);
    this.setState({pageCur: index + 1});
  };

  getItemLayout = (data, index) => ({
    length: Dimensions.get('window').width / 3,
    offset: (Dimensions.get('window').width / 3) * index,
    index,
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          getItemLayout={this.getItemLayout}
          style={styles.viewPagger}
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={this.srollview}
          data={listViewPagers}
          initialScrollIndex={14}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  this.state.pageCur === item.id
                    ? styles.viewPageSelected
                    : styles.viewPage
                }
                onPress={() => {
                  this.onPress(item.id - 1);
                  //   this.srollview.current.scrollToIndex({
                  //     animated: true,
                  //     index,
                  //     viewOffset: Dimensions.get('window').width / 20,
                  //     //   viewOffset: 0.5,
                  //     // viewPosition: 0.5,
                  //   });
                }}>
                <Text
                  allowFontScaling={false}
                  style={
                    this.state.pageCur === item.id
                      ? styles.textPageSelect
                      : styles.textPage
                  }>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <ViewPager
          scrollEnabled={false}
          style={{flex: 1}}
          initialPage={19}
          ref={this.viewPager}
          onPageSelected={e => {
            // this.setState({pageCur: e.nativeEvent.position + 1});
            if (this.state.isFirst) {
              // this.onPress(18);
              this.viewPager.current.setPageWithoutAnimation(18);
              this.setState({isFirst: false});
            }
          }}>
          {map(listViewPagers, (item, index) => {
            return (
              <ScrollView
                key={(index + 1).toString()}
                style={{backgroundColor: '#003f5c'}}>
                <SoGiaoDichComponent
                  componentId={this.props.componentId}
                  key={index}
                  date={item.value}
                />
              </ScrollView>
            );
          })}
        </ViewPager>
      </SafeAreaView>
    );
  }
}
