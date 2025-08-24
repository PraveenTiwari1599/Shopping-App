import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IconConst from '../../assets/iconConst';
import {heightPercent, widthPercent} from '../../helpers/Responsive';
import CommonStyles from '../../helpers/CommonStyles';
import Colors from '../../assets/theme/Colors';
import {navigate} from '../../navigation/RouterServices';
import ScreenNames from '../../navigation/ScreenNames';
const IntroductionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={IconConst.lady}
          resizeMode="contain"
          style={styles.ladyIcon}>
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>
              Hi, I am your fashion advisor. Let's get you started with creating
              your mix & match fashion avatar.
            </Text>
            <View style={styles.buttonSection}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => navigate(ScreenNames.FaceUploadScreen)}>
                <Image
                  source={IconConst.rightArrow}
                  resizeMode="contain"
                  style={styles.rightArrow}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
    marginBottom: 50,
  },
  ladyIcon: {
    width: widthPercent('82%'),
    height: heightPercent('82%'),
    justifyContent: 'flex-end',
  },
  descriptionSection: {
    borderWidth: 4,
    borderColor: Colors.border_grey_color,
    borderRadius: 2,
    padding: 5,
    backgroundColor: Colors.background,
  },
  descriptionText: {
    ...CommonStyles.textSize16SemiBold,
    lineHeight: 30,
    color: Colors.text.regular,
  },
  buttonSection: {
    alignItems: 'flex-end',
  },
  button: {
    padding: 5,
    justifyContent: 'center',
  },
  rightArrow: {
    width: widthPercent('12%'),
    height: heightPercent('5%'),
    resizeMode: 'contain',
  },
});

export default IntroductionScreen;
