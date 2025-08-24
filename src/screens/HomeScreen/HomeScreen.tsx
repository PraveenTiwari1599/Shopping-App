import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Colors from '../../assets/theme/Colors';
import IconConst from '../../assets/iconConst';
import MainContent from '../../Components/MainContent';
import Sidebar from '../../Components/Sidebar';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
  
      <ImageBackground
        source={IconConst.roomBg}
        style={styles.bgImage}
      >
        <View style={styles.content}>
          <MainContent />
          <Sidebar />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.exLightGrey,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems:'flex-end'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },

});

export default HomeScreen;
