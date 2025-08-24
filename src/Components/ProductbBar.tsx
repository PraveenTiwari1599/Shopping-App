import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Colors from '../assets/theme/Colors';
import CommonStyles from '../helpers/CommonStyles';

const {width, height} = Dimensions.get('window');

interface Types {
  typeList: any[];
}

const ProductbBar = ({typeList}: Types) => {
  return (
    <View style={styles.container}>
      <Text style={styles.typesTitleText}>Types</Text>
      <View style={styles.typesContainer}>
        <FlatList
          data={typeList}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          style={{height:'98%'}}
          renderItem={({item, index}) => {
            console.log("item",item)
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.typesItem,
                  {marginLeft: index % 2 === 0 ? 0 : 10},
                ]}
                activeOpacity={0.8}>
                <View style={[styles.iconContainer, {overflow: 'hidden'}]}>
                  <Image
                    source={{
                      uri: `https://demo03.tryndbuy.com/images/Th${item.SKUID}.jpg`,
                    }}
                    style={styles.imageIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.typesText}>{'Dresses'}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    backgroundColor: Colors.white_color,
  },
  typesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
  typesItem: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.white_color,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.black_color,
  },
  imageIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  typesText: {
    ...CommonStyles.textSize11SemiBold,
    color: Colors.black_color,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  typesTitleText: {
    ...CommonStyles.textSize16Bold,
    marginLeft: 20,
    paddingTop: 20,
  },
});

export default memo(ProductbBar);
