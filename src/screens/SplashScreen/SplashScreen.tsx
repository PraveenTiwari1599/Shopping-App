import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import IconConst from '../../assets/iconConst';
import {heightPercent, widthPercent} from '../../helpers/Responsive';
import CommonStyles from '../../helpers/CommonStyles';
import Colors from '../../assets/theme/Colors';
import {navigate} from '../../navigation/RouterServices';
import ScreenNames from '../../navigation/ScreenNames';
import ProgressAnimation from '../../Components/ProgressAnimation';
const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={IconConst.splashIcon} style={styles.splashIcon} />
        </View>
        <View style={styles.loadingSection}>
          <Text style={styles.loadingText}>Loading brands...</Text>
          <ProgressAnimation
            onSuccess={() => {
              navigate(ScreenNames.IntroductionScreen);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashIcon: {
    width: widthPercent('60%'),
    height: heightPercent('60%'),
    resizeMode: 'contain',
  },
  loadingSection: {
    alignItems: 'center',
    marginTop: -70,
  },
  loadingText: {
    ...CommonStyles.textSize20Bold,
    marginBottom: 15,
  },
});

export default SplashScreen;
