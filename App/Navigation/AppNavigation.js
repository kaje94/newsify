import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ViewDetailScreen from '../Containers/ViewDetailScreen';

import styles from './Styles/NavigationStyles';

import {TabNav} from './TabNavigator';

const PrimaryNav = createStackNavigator(
  {
    MainScreen: {screen: TabNav},
    ViewDetailScreen: {screen: ViewDetailScreen},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
