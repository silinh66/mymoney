import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  PanResponder,
  Text,
} from 'react-native';
import {scale} from '../../utils';
import {TouchableOpacity} from 'react-native';

export default class ModalBottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panY: new Animated.Value(Dimensions.get('screen').height),
    };
    this._resetPositionAnim = Animated.timing(this.state.panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    });
    this._closeAnim = Animated.timing(this.state.panY, {
      toValue: Dimensions.get('screen').height,
      duration: 500,
      useNativeDriver: true,
    });
    this._panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: this.state.panY}], {
        useNativeDriver: true,
      }),
      onPanResponderRelease: (e, gs) => {
        if (gs.dy > 0 && gs.vy > 1) {
          return this._closeAnim.start(() => this.props.onDismiss());
        }
        return this._resetPositionAnim.start();
      },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this._resetPositionAnim.start();
    }
  }
  _handleDismiss() {
    this._closeAnim.start(() => this.props.onDismiss());
  }
  render() {
    const top = this.state.panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 0, 1],
    });
    return (
      <Modal
        animated
        animationType="slide"
        visible={this.props.visible}
        transparent
        onRequestClose={() => this._handleDismiss()}>
        <View style={styles.overlay}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => this._handleDismiss()}
          />
          <Animated.View style={[styles.container]}>
            <View
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                backgroundColor: '#ffffff',
              }}
              {...this._panResponders.panHandlers}>
              <View
                style={{
                  backgroundColor: 'black',
                  width: '40%',
                  height: 3,
                  alignSelf: 'center',
                }}></View>
            </View>
            {this.props.children}
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    // paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    maxHeight: '90%',
  },
});
