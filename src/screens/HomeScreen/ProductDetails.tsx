import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Platform,
} from 'react-native';
import Colors from '../../assets/theme/Colors';
import IconConst from '../../assets/iconConst';
import MainContent from '../../Components/MainContent';
import {goBack} from '../../navigation/RouterServices';
import ProductbBar from '../../Components/ProductbBar';
import {heightPercent} from '../../helpers/Responsive';
import CommonStyles from '../../helpers/CommonStyles';

const ProductDetails = () => {
  const [types, setTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        'https://t03.tryndbuy.com/api/GetMappedSKUDetails',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authID: '3c643a25e11144ad',
          },
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      if (data.MappedSkuList) {
        setTypes(data.MappedSkuList);
      } else {
        console.error('MappedSkuList not found. Response:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const PriceTile = ({text}: {text: string}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.box} />
        <Text style={styles.boxText}>{text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.primary_color}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.backArrowContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                goBack();
              }}
              style={{marginLeft: 10}}>
              <Image source={IconConst.backArrow} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={styles.priceTileContainer}>
              <PriceTile text="5,000" />
              <PriceTile text="225/100" />
              <PriceTile text="1,200" />
            </View>
            <View style={styles.cartContainer}>
              <Image source={IconConst.bag} style={styles.cartImage} />
            </View>
          </View>

          <ImageBackground source={IconConst.roomBg} style={styles.bgImage}>
            <View style={styles.content}>
              <MainContent containerStyle={{top: heightPercent('8%')}} />
              <ProductbBar typeList={types} />
            </View>
          </ImageBackground>
        </View>
      )}
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
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  backArrowContainer: {
    marginTop: Platform.OS == 'android' ? 50 : 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Colors.grey,
  },
  priceTileContainer: {
    height: 25,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginLeft: 40,
  },
  box: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: Colors.black_color,
    marginLeft: 10,
  },
  boxText: {
    ...CommonStyles.textSize14Regular,
    marginLeft: 5,
  },
  cartContainer: {
    width: 25,
    height: 25,
    backgroundColor: Colors.red_color,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  cartImage: {
    width: 12,
    height: 12,
    tintColor: Colors.white_color,
  },
});

export default ProductDetails;
