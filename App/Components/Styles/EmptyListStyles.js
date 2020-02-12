import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../Themes/';

export default StyleSheet.create({
  emptyComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight * 0.75,
  },
  textStyle: {
    ...Fonts.style.h5,
    color: Colors.banner,
    padding: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
  },
});
