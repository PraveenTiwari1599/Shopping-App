import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../../assets/theme/Colors';
import CommonStyles from '../../helpers/CommonStyles';
import IconConst from '../../assets/iconConst';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from '../../Components/Button';
import ScreenNames from '../../navigation/ScreenNames';
import {navigate} from '../../navigation/RouterServices';
const {height, width} = Dimensions.get('window');
const FaceUploadScreen = () => {
  const [imageResponse, setImageResponse] = useState<any>({});
  const openGalleryUpload = () => {
    ImageCropPicker.openPicker({
      width: width,
      height: height,
      mediaType: 'any',
      videoQuality: 'low',
      compressImageMaxWidth: width,
      compressImageMaxHeight: height,
      compressImageQuality: 0.7,
    }).then((res: any) => {
      console.log('res', res);
      setImageResponse(res);
    });
  };

  const openCameraUpload = () => {
    ImageCropPicker.openCamera({
      width: width,
      height: height,
      compressImageMaxWidth: width,
      compressImageMaxHeight: height,
      videoQuality: 'low',
    }).then((res: any) => {
      setImageResponse(res);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[
            styles.headerTitle,
            {color: imageResponse.path ? Colors.text.light : Colors.lightGrey},
          ]}>
          FACIAL ATTRIBUTES
        </Text>
        <Text
          style={[
            styles.headerSubtitle,
            {color: imageResponse.path ? Colors.text.dark : Colors.text.light},
          ]}>
          Let's add a Photo
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.uploadContainer}>
          <View
            style={[
              styles.uploadCircle,
              imageResponse.path ? styles.uploadCircleActive : {},
            ]}>
            {imageResponse.path ? (
              <Image
                source={{uri: imageResponse.path}}
                style={styles.uploadImage}
              />
            ) : (
              <View style={{...CommonStyles.justifyAlignCenter}}>
                <View style={styles.addIconContainer}>
                  <Image source={IconConst.addIcon} style={styles.addIcon} />
                </View>
                <Text style={styles.uploadText}>Add an image</Text>
              </View>
            )}
          </View>
        </View>
        {imageResponse.path ? (
          <Button
            buttonText="UPLOAD"
            onPress={() => {
              navigate(ScreenNames.SuccessScreen);
            }}
          />
        ) : (
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              activeOpacity={0.8}
              onPress={openGalleryUpload}>
              <Image source={IconConst.photo} style={styles.galleryIcon} />
              <Text style={styles.optionText}>From Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              activeOpacity={0.8}
              onPress={openCameraUpload}>
              <Image source={IconConst.camera} style={styles.galleryIcon} />
              <Text style={styles.optionText}>Take a Selfie</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: Colors.border_grey_color,
    paddingHorizontal: 20,
  },
  headerTitle: {
    ...CommonStyles.textSize14SemiBold,
    marginBottom: 10,
  },
  headerSubtitle: {
    ...CommonStyles.textSize20Bold,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadCircle: {
    width: 200,
    height: 200,
    borderWidth: 2.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  uploadCircleActive: {
    borderColor: Colors.green,
    borderStyle: 'solid',
  },
  uploadImage: {
    width: 195,
    height: 195,
    borderRadius: 100,
    resizeMode: 'stretch',
  },
  addIconContainer: {
    width: 46,
    height: 46,
    backgroundColor: Colors.white_color,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 35,
    height: 35,
    tintColor: Colors.grey,
    resizeMode: 'contain',
  },
  uploadText: {
    ...CommonStyles.textSize12SemiBold,
    color: Colors.text.light,
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 50,
  },
  optionButton: {
    alignItems: 'center',
    padding: 20,
  },
  galleryIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  cameraIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  optionText: {
    ...CommonStyles.textSize14Bold,
    color: Colors.text.dark,
    marginTop: 10,
  },
});

export default FaceUploadScreen;
