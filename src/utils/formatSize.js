import {Platform, StatusBar, Dimensions} from 'react-native';

const baseWidth = 375;
const baseHeight = 667;

const {height, width} = Dimensions.get('window');

// padding, margin, fontSize, ....
export const scale = size => (width / baseWidth) * size;

// width
export const wScale = size => (height / baseHeight) * size;

// height
export const hScale = (size, factor = 0.5) =>
  size + (wScale(size) - size) * factor;

// Setting AutoScaling
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset : standardLength;

export function fontScaling(fontSize, standardScreenHeight = baseHeight) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
