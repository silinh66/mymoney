/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

// import {AppRegistry} from 'react-native';
import App from './App';
import {switchSplashScreen} from './src/screen/NavigationController';
import RegisterScreens from './src/screen/RegisterScreens';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
RegisterScreens();
Navigation.events().registerAppLaunchedListener(() => {
  // setDefaultOptions();
  switchSplashScreen();
});

// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'com.myApp.WelcomeScreen',
//             },
//           },
//         ],
//       },
//     },
//   });
// });
