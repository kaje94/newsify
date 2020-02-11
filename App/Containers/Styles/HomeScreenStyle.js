import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes/';
import Metrics from '../../Themes/Metrics';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  activityIndicatorWrap: {
    justifyContent: 'center',
    height: Metrics.screenHeight * 0.75,
  },
});
