import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import WomanModel from './WomanModel';

const { width, height } = Dimensions.get('window');
interface MainContentProps {
  containerStyle?: StyleProp<ViewStyle>;
}
const MainContent = ({containerStyle}: MainContentProps) => {
  return (
    <View style={styles.container}>
      <WomanModel containerStyle={containerStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default memo(MainContent);
