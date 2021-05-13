/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

global.WIDTH = WINDOW_WIDTH;
global.HEIGHT = WINDOW_HEIGHT;

AppRegistry.registerComponent(appName, () => App);
