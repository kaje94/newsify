import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes/';
import Metrics from '../../Themes/Metrics';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  wrap: {
    justifyContent: 'center',
    height: Metrics.screenHeight * 0.7,
  },
  avatarWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  textInputStyle: {
    marginVertical: 20,
  },
  buttonStyle: {
    marginVertical: 20,
  },
});
