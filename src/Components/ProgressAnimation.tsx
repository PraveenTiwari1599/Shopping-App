import React, {memo, useEffect, useRef} from 'react';
import {StyleSheet, Animated, View, type StyleProp, type ViewStyle} from 'react-native';
import Colors from '../assets/theme/Colors';
import { widthPercent } from '../helpers/Responsive';

interface ProgressAnimationProps {
  onSuccess: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
const ProgressAnimation = ({onSuccess,containerStyle}: ProgressAnimationProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        onSuccess();
      }
    });
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container,containerStyle]}>
      <Animated.View style={[styles.loadingProgress, {width: progressWidth}]} />
    </View>
  );
};
export default memo(ProgressAnimation);

export const styles = StyleSheet.create({
  container: {
    width: widthPercent('60%'),
    height: 8,
    backgroundColor: Colors.lightGrey,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 20,
  },
  loadingProgress: {
    width: '60%',
    height: '100%',
    backgroundColor: Colors.black_color,
    borderRadius: 4,
  },
});
