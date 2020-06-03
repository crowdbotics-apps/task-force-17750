import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile59544Navigator from '../features/UserProfile59544/navigator';
import Tutorial59543Navigator from '../features/Tutorial59543/navigator';
import NotificationList59515Navigator from '../features/NotificationList59515/navigator';
import Settings59514Navigator from '../features/Settings59514/navigator';
import Settings59506Navigator from '../features/Settings59506/navigator';
import UserProfile59504Navigator from '../features/UserProfile59504/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile59544: { screen: UserProfile59544Navigator },
Tutorial59543: { screen: Tutorial59543Navigator },
NotificationList59515: { screen: NotificationList59515Navigator },
Settings59514: { screen: Settings59514Navigator },
Settings59506: { screen: Settings59506Navigator },
UserProfile59504: { screen: UserProfile59504Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
