import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    margin: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioText: {
    fontSize: 15,
    color: '#342A2A',
    lineHeight: 21,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#44ab4a',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#44ab4a',
  },
});

export default styles;
