import {StyleSheet} from 'react-native';
import {hScale, scale} from '../../utils/formatSize';

const _hScale = hScale(1, 1);

const styles = StyleSheet.create({
  viewPage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  viewPageSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#44AB4A',
    paddingHorizontal: 20,
  },
  textPageSelect: {
    color: '#342A2A',
    fontSize: scale(17),
    lineHeight: scale(20),
    fontWeight: 'bold',
  },
  textPage: {
    color: '#9197A3',
    fontSize: scale(17),
    lineHeight: scale(20),
  },
  viewHeaderPagger: {
    backgroundColor: '#ffffff',
    height: _hScale * 40,
    flexDirection: 'row',
  },
  viewPagger: {
    maxHeight: scale(40),
    flex: 1,
    backgroundColor: '#FFFFFF',
    // flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F6FE',
  },
});

export default styles;
