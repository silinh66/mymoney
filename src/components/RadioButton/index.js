import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import styles from './styles';
import {get} from 'lodash';

export default class RadioButton extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    const {PROP, getValue} = this.props;
    const {value} = this.state;
    return (
      <View>
        <FlatList
          data={PROP}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: item.id,
                  });
                  getValue(item.id);
                }}>
                {value.toString() === item.id.toString() && (
                  <View style={styles.selectedRb} />
                )}
              </TouchableOpacity>
              <Text
                allowFontScaling={false}
                onPress={() => {
                  this.setState({
                    value: item.id,
                  });
                  getValue(item.id);
                }}
                style={styles.radioText}>
                {item.text}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
