import {Navigation} from 'react-native-navigation';

export const switchSplashScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.Login',
              passProps: {
                text: 'This is tab 1',
              },
            },
          },
        ],
        options: {
          bottomTab: {
            text: 'Tab 1',
            // icon: require('../images/one.png'),
            // testID: 'FIRST_TAB_BAR_BUTTON'
          },
          topBar: {
            visible: false,
          },
        },
      },
    },
    // root: {
    //   /*-----------------So giao dich-------------------*/
    //   bottomTabs: {
    //     id: 'BOTTOM_TABS_LAYOUT',
    //     children: [
    //       {
    //         stack: {
    //           id: 'HOME_TAB',
    //           children: [
    //             {
    //               component: {
    //                 id: 'SoGiaoDich',
    //                 name: 'navigation.SoGiaoDich',
    //               },
    //             },
    //           ],
    //           options: {
    //             bottomTab: {
    //               icon: require('../resources/checklist.png'),
    //               backgroundColor: 'red',
    //               text: 'Sổ giao dịch',
    //             },
    //             topBar: {
    //               visible: false,
    //             },
    //             statusBar: {
    //               drawBehind: true,
    //               backgroundColor: 'transparent',
    //             },
    //           },
    //         },
    //       },

    //       /*-----------------Bao cao-------------------*/
    //       {
    //         stack: {
    //           id: 'HOME_TAB',
    //           children: [
    //             {
    //               component: {
    //                 id: 'BaoCao',
    //                 name: 'navigation.BaoCao',
    //               },
    //             },
    //           ],
    //           options: {
    //             bottomTab: {
    //               icon: require('../resources/baocao.png'),
    //               backgroundColor: 'red',
    //               text: 'Báo cáo',
    //             },
    //             topBar: {
    //               visible: false,
    //             },
    //           },
    //         },
    //       },

    //       /*-----------------Add Button-------------------*/
    //       {
    //         stack: {
    //           id: 'HOME_TAB',
    //           children: [
    //             {
    //               component: {
    //                 id: 'ModalAdd',
    //                 name: 'navigation.ModalAdd',
    //               },
    //             },
    //           ],
    //           options: {
    //             bottomTab: {
    //               icon: require('../resources/plus.png'),
    //               backgroundColor: 'red',
    //               text: 'Thêm',
    //             },
    //             topBar: {
    //               visible: false,
    //             },
    //           },
    //         },
    //       },

    //       /*-----------------Lap Ke Hoach-------------------*/
    //       {
    //         stack: {
    //           id: 'HOME_TAB',
    //           children: [
    //             {
    //               component: {
    //                 id: 'LapKeHoach',
    //                 name: 'navigation.LapKeHoach',
    //               },
    //             },
    //           ],
    //           options: {
    //             bottomTab: {
    //               icon: require('../resources/lapKeHoach.png'),
    //               backgroundColor: 'red',
    //               text: 'Lập kế hoạch',
    //             },
    //             topBar: {
    //               visible: false,
    //             },
    //           },
    //         },
    //       },

    //       /*----------------Tai Khoan--------------------*/
    //       {
    //         stack: {
    //           id: 'PROFILE_TAB',
    //           children: [
    //             {
    //               component: {
    //                 id: 'TaiKhoan',
    //                 name: 'navigation.TaiKhoan',
    //               },
    //             },
    //           ],
    //           options: {
    //             bottomTab: {
    //               icon: require('../resources/User.png'),
    //               backgroundColor: 'red',
    //               text: 'Tài khoản',
    //             },
    //             topBar: {
    //               visible: false,
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
  });
};
