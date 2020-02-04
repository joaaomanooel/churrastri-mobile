/* eslint-disable no-console */
import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
  openInEditor,
  overlay,
  networking,
} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(asyncStorage())
    .use(overlay())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(networking())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
