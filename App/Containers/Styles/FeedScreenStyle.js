import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerWrap: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
