import {Navigation} from 'react-native-navigation';
import App from '../../App';
import BaoCao from './BaoCao';
import LapKeHoach from './LapKeHoach';
import ModalAdd from './ModalAdd';
import SoGiaoDich from './SoGiaoDich';
import TaiKhoan from './TaiKhoan';

export default function RegisterScreens(provider, store) {
  Navigation.registerComponent('navigation.HOME', () => App);
  Navigation.registerComponent('navigation.SoGiaoDich', () => SoGiaoDich);
  Navigation.registerComponent('navigation.BaoCao', () => BaoCao);
  Navigation.registerComponent('navigation.ModalAdd', () => ModalAdd);
  Navigation.registerComponent('navigation.LapKeHoach', () => LapKeHoach);
  Navigation.registerComponent('navigation.TaiKhoan', () => TaiKhoan);
}
