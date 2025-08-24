import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import IconConst from '../assets/iconConst';
import {heightPercent, widthPercent} from '../helpers/Responsive';
import Colors from '../assets/theme/Colors';
import CommonStyles from '../helpers/CommonStyles';
import ScreenNames from '../navigation/ScreenNames';
import {navigate} from '../navigation/RouterServices';

const {width, height} = Dimensions.get('window');

const Sidebar = () => {
  const categories = [
    {name: 'Dresses', icon: IconConst.dress},
    {name: 'Makeup', icon: IconConst.brush},
    {name: 'Goggles', icon: IconConst.glass},
    {name: 'Shoes', icon: IconConst.sneakers},
    {name: 'Location', icon: IconConst.pictures},
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          activeOpacity={0.8}
          onPress={() => {
            navigate(ScreenNames.ProductDetails);
          }}>
          <View style={styles.iconContainer}>
            <Image
              source={category.icon}
              style={styles.imageIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    backgroundColor: 'rgba(211, 211, 211, 0.8)',
    paddingVertical: heightPercent('16%'),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoryItem: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.white_color,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
  categoryText: {
    ...CommonStyles.textSize11Regular,
    color: Colors.white_color,
    textAlign: 'center',
    backgroundColor: 'rgba(149, 148, 148, 0.8)',
    width: widthPercent('15%'),
    paddingVertical: 2,
  },
});

export default memo(Sidebar);
