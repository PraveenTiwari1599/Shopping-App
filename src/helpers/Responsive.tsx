import { Dimensions, PixelRatio, Platform } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const SCREEN_WIDTH: any = Dimensions.get('window').width;
export const SCREEN_HEIGHT: any = Dimensions.get('window').height;
export const DEVICE_HEIGHT: any = Dimensions.get('screen').height;
export const DEVICE_WIDTH: any = Dimensions.get('screen').width;

const fontScale = (fontSize: any) => {
  const baseSize: any = Platform.select({ ios: 375, android: 420 });
  return fontSize * (screenWidth / baseSize);
};

const widthPercent = (widthPercent: string) => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};


const heightPercent = (heightPercent: string) => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that: any) => {
  Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

const dimensionsSubscription = Dimensions.addEventListener('change', listenOrientationChange);

const removeOrientationListener = () => {
  dimensionsSubscription?.remove();
  // Dimensions.removeEventListener('change', () => { });
};

const widthBaseScale = screenWidth / 390;
const heightBaseScale = screenHeight / 844;

function normalize(size: any, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
const fontPixel = (size: number) => {
  return heightPixel(size);
};
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export  {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  fontScale,
  widthPercent,
  heightPercent,
  listenOrientationChange,
  removeOrientationListener,
};
