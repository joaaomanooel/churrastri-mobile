import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const InitialScreen = {
  defaultNavigationOptions: { headerShown: false },
  initialRouteName: 'Main',
  mode: 'modal',
};

const screens = {
  Main: require('@/screens/Main').default,
  Login: require('@/screens/Login').default,
  Barbecues: require('@/screens/Barbecues').default,
  BarbecueDetail: require('@/screens/BarbecueDetail').default,
};

const switchNavigator = createStackNavigator(screens, InitialScreen);
export default createAppContainer(switchNavigator);
