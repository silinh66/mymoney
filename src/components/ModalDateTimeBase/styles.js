import {StyleSheet} from 'react-native';
import {scale} from '../../utils/formatSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  textLydo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
    color: '#091E42',
    marginLeft: 16,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: -5,
  },
  btnXacNhan: {
    width: scale(148),
    height: scale(42),
    backgroundColor: '#44AB4A',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 12,
  },
  labelXacNhan: {
    fontSize: scale(14),
    lineHeight: scale(18),
    display: 'flex',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
});

export default styles;
