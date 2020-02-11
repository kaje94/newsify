import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bannerImage: {
    width: '100%',
    aspectRatio: 1,
  },
  buttonStyle: {
    marginTop: 10,
  },
});
