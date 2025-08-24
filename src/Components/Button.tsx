import React, {memo} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
  StyleSheet,
} from 'react-native';
import Colors from '../assets/theme/Colors';
import {heightPercent} from '../helpers/Responsive';
import {widthPercent} from '../helpers/Responsive';
import CommonStyles from '../helpers/CommonStyles';

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const Button = ({
  buttonText,
  onPress,
  loading,
  style,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};
export default memo(Button);

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black_color,
    width: widthPercent('88%'),
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: heightPercent('6%'),
    height: heightPercent('5.4%'),
    marginBottom: heightPercent('3.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...CommonStyles.textSize13Medium,
    color: Colors.white_color,
    textAlign: 'center',
  },
});
