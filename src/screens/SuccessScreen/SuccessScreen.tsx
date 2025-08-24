import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  Platform,
} from 'react-native';
import IconConst from '../../assets/iconConst';
import Colors from '../../assets/theme/Colors';
import CommonStyles from '../../helpers/CommonStyles';
import ProgressAnimation from '../../Components/ProgressAnimation';
import { navigate } from '../../navigation/RouterServices';
import ScreenNames from '../../navigation/ScreenNames';

const SuccessScreen = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {isSuccess && (
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            navigate(ScreenNames.HomeScreen);
          }}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        <View style={styles.checkmarkContainer}>
          <Image
            source={IconConst.success}
            style={[
              styles.checkmarkImage,
              {tintColor: isSuccess ? Colors.green : Colors.lightGrey},
            ]}
          />
        </View>
        <View style={{marginBottom: 30, alignItems: 'center'}}>
          <Text style={styles.successMessage}>Selfie captured perfectly!</Text>
          <Text style={[styles.successMessage, {marginTop: 6}]}>
            Let's build your own fashion avatar.
          </Text>
        </View>
        <ProgressAnimation
          onSuccess={() => {
            setIsSuccess(true);
            setTimeout(() => {
              navigate(ScreenNames.HomeScreen);
            }, 2000);
          }}
          containerStyle={{width: '80%',}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS == 'android' ? 40 : 80,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkContainer: {
    marginBottom: 60,
  },
  checkmarkImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  checkmarkText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  successMessage: {
    ...CommonStyles.textSize15Medium,
    textAlign: 'center',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: 250,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
});

export default SuccessScreen;
