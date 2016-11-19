import {Navigation} from 'react-native-navigation';

import Counter from '../build/containers/screens/counter';
import Counter2 from '../build/containers/screens/counter.2';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('screen.Counter', () => Counter, store, Provider);
  Navigation.registerComponent('screen.Counter2', () => Counter2, store, Provider);
}