import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Image,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import IconConst from '../assets/iconConst';
import { heightPercent, widthPercent } from '../helpers/Responsive';

interface WomanModelProps {
  containerStyle?: StyleProp<ViewStyle>;
}
const WomanModel = ({containerStyle}: WomanModelProps) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <Image source={IconConst.modelLady} style={styles.modelLady} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: -widthPercent('2%'),
    top: heightPercent('12%'),
    alignItems: 'center',
  },
  modelLady: {
    width: widthPercent('60%'),
    height: heightPercent('70%'),
    resizeMode: 'contain',
  },
});

export default memo(WomanModel);
