import {createTheme} from '@rneui/themed';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

import {Colors} from './Colors';

export const RNEUITheme = createTheme({
  lightColors: Colors.light,
  darkColors: Colors.dark,
  components: {
    ListItemCheckBox: {
      iconType: 'ionicon',
      checkedIcon: 'checkbox-outline',
      uncheckedIcon: 'square-outline',
    },
    Card: {
      containerStyle: {
        borderRadius: moderateScale(4),
        shadowColor: '#000',
        shadowOffset: {
          height: 4,
          width: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    },
    Text: {
      style: {
        fontSize: moderateScale(16, 0.3),
      },
    },
    Button: {
      buttonStyle: {
        height: moderateVerticalScale(50),
      },
    },
    Input: {
      containerStyle: {
        paddingHorizontal: 0,
      },
      labelStyle: {
        fontWeight: '300',
        marginBottom: moderateVerticalScale(5),
      },
      inputContainerStyle: {
        height: moderateVerticalScale(50),
        borderWidth: moderateScale(0.8),
        borderBottomWidth: moderateScale(0.8),
        borderRadius: moderateScale(4),
        borderColor: '#ddd',
      },
    },
  },
});
