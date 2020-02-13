import { Dimensions, Platform } from 'react-native';
import colors from './colors';

const { width, height } = Dimensions.get('window');

const getScale = (smallScreenScaling = 1, limitScale = true) => {
  let scale = ((width / 360) + (height / 640)) / 2;
  if (scale > 1 && limitScale) {
    scale = 1;
  } else if (scale < 1) {
    scale *= smallScreenScaling;
  }
  return scale;
};

let statusBarHeight = 0;
if (Platform.OS === 'ios') {
  statusBarHeight = 20;
  if (height > 800) statusBarHeight = 30;
}

const shadow = {
  shadowColor: colors.black(0.5),
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
};

export default {
  screenWidth: width,
  screenHeight: height,
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
  largeHitSlop: { top: 15, left: 15, right: 15, bottom: 15 },
  scale: getScale,
  statusBarHeight,
  shadow,
};
