import {StyleSheet} from 'react-native';
import {fontPixel} from './Responsive';
import Colors from '../assets/theme/Colors';

const CommonStyles = StyleSheet.create({
  // ******** Aligment ********
  flexRoot: {
    flex: 1,
  },
  flexRootPadding: {
    flex: 1,
    paddingHorizontal: 20,
  },
  rootPadding: {
    paddingHorizontal: 20,
  },
  flexJustifyAlignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowJustifyAlignCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowJustifySpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowJustifySpaceBetweenAlignCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowJustifyEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  // ******** 9 ********
  textSize9Regular: {
    fontSize: fontPixel(9),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize9Medium: {
    fontSize: fontPixel(9),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize9Bold: {
    fontSize: fontPixel(9),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize9SemiBold: {
    fontSize: fontPixel(9),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize9ExtraBold: {
    fontSize: fontPixel(9),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 10 ********
  textSize10Regular: {
    fontSize: fontPixel(10),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize10Medium: {
    fontSize: fontPixel(10),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize10Bold: {
    fontSize: fontPixel(10),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize10SemiBold: {
    fontSize: fontPixel(10),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize10ExtraBold: {
    fontSize: fontPixel(10),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 11 ********
  textSize11Regular: {
    fontSize: fontPixel(11),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize11Medium: {
    fontSize: fontPixel(11),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize11Bold: {
    fontSize: fontPixel(11),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize11SemiBold: {
    fontSize: fontPixel(11),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize11ExtraBold: {
    fontSize: fontPixel(11),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 12 ********
  textSize12Regular: {
    fontSize: fontPixel(12),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize12Medium: {
    fontSize: fontPixel(12),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize12Bold: {
    fontSize: fontPixel(12),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize12SemiBold: {
    fontSize: fontPixel(12),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize12ExtraBold: {
    fontSize: fontPixel(12),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 13 ********
  textSize13Regular: {
    fontSize: fontPixel(13),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize13Medium: {
    fontSize: fontPixel(13),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize13Bold: {
    fontSize: fontPixel(13),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize13SemiBold: {
    fontSize: fontPixel(13),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize13ExtraBold: {
    fontSize: fontPixel(13),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 14 ********
  textSize14Regular: {
    fontSize: fontPixel(14),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize14Medium: {
    fontSize: fontPixel(14),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize14Bold: {
    fontSize: fontPixel(14),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize14SemiBold: {
    fontSize: fontPixel(14),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize14ExtraBold: {
    fontSize: fontPixel(14),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 15 ********
  textSize15Regular: {
    fontSize: fontPixel(15),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize15Medium: {
    fontSize: fontPixel(15),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize15Bold: {
    fontSize: fontPixel(15),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize15SemiBold: {
    fontSize: fontPixel(15),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize15ExtraBold: {
    fontSize: fontPixel(15),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 16 ********
  textSize16Regular: {
    fontSize: fontPixel(16),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize16Medium: {
    fontSize: fontPixel(16),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize16Bold: {
    fontSize: fontPixel(16),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize16SemiBold: {
    fontSize: fontPixel(16),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize16ExtraBold: {
    fontSize: fontPixel(16),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 17 ********
  textSize17Regular: {
    fontSize: fontPixel(17),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize17Medium: {
    fontSize: fontPixel(17),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize17Bold: {
    fontSize: fontPixel(17),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize17SemiBold: {
    fontSize: fontPixel(17),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize17ExtraBold: {
    fontSize: fontPixel(17),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 18 ********
  textSize18Regular: {
    fontSize: fontPixel(18),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize18Medium: {
    fontSize: fontPixel(18),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize18Bold: {
    fontSize: fontPixel(18),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize18SemiBold: {
    fontSize: fontPixel(18),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize18ExtraBold: {
    fontSize: fontPixel(18),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 19 ********
  textSize19Regular: {
    fontSize: fontPixel(19),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize19Medium: {
    fontSize: fontPixel(19),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize19Bold: {
    fontSize: fontPixel(19),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize19SemiBold: {
    fontSize: fontPixel(19),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize19ExtraBold: {
    fontSize: fontPixel(19),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 20 ********
  textSize20Regular: {
    fontSize: fontPixel(20),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize20Medium: {
    fontSize: fontPixel(20),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize20Bold: {
    fontSize: fontPixel(20),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize20SemiBold: {
    fontSize: fontPixel(20),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize20ExtraBold: {
    fontSize: fontPixel(20),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 21 ********
  textSize21Regular: {
    fontSize: fontPixel(21),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize21Medium: {
    fontSize: fontPixel(21),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize21Bold: {
    fontSize: fontPixel(21),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize21SemiBold: {
    fontSize: fontPixel(21),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize21ExtraBold: {
    fontSize: fontPixel(21),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 22 ********
  textSize22Regular: {
    fontSize: fontPixel(22),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize22Medium: {
    fontSize: fontPixel(22),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize22Bold: {
    fontSize: fontPixel(22),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize22SemiBold: {
    fontSize: fontPixel(22),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize22ExtraBold: {
    fontSize: fontPixel(22),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 23 ********
  textSize23Regular: {
    fontSize: fontPixel(23),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize23Medium: {
    fontSize: fontPixel(23),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize23Bold: {
    fontSize: fontPixel(23),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize23SemiBold: {
    fontSize: fontPixel(23),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize23ExtraBold: {
    fontSize: fontPixel(23),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 24 ********
  textSize24Regular: {
    fontSize: fontPixel(24),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize24Medium: {
    fontSize: fontPixel(24),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize24Bold: {
    fontSize: fontPixel(24),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize24SemiBold: {
    fontSize: fontPixel(24),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize24ExtraBold: {
    fontSize: fontPixel(24),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 25 ********
  textSize25Regular: {
    fontSize: fontPixel(25),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize25Medium: {
    fontSize: fontPixel(25),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize25Bold: {
    fontSize: fontPixel(25),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize25SemiBold: {
    fontSize: fontPixel(25),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize25ExtraBold: {
    fontSize: fontPixel(25),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 26 ********
  textSize26Regular: {
    fontSize: fontPixel(26),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize26Medium: {
    fontSize: fontPixel(26),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize26Bold: {
    fontSize: fontPixel(26),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize26SemiBold: {
    fontSize: fontPixel(26),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize26ExtraBold: {
    fontSize: fontPixel(26),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 27 ********
  textSize27Regular: {
    fontSize: fontPixel(27),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize27Medium: {
    fontSize: fontPixel(27),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize27Bold: {
    fontSize: fontPixel(27),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize27SemiBold: {
    fontSize: fontPixel(27),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize27ExtraBold: {
    fontSize: fontPixel(27),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 28 ********
  textSize28Regular: {
    fontSize: fontPixel(28),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize28Medium: {
    fontSize: fontPixel(28),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize28Bold: {
    fontSize: fontPixel(28),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize28SemiBold: {
    fontSize: fontPixel(28),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize28ExtraBold: {
    fontSize: fontPixel(28),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 29 ********
  textSize29Regular: {
    fontSize: fontPixel(29),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize29Medium: {
    fontSize: fontPixel(29),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize29Bold: {
    fontSize: fontPixel(29),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize29SemiBold: {
    fontSize: fontPixel(29),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize29ExtraBold: {
    fontSize: fontPixel(29),
    fontWeight:'800',
    color: Colors.black_color,
  },
  // ******** 30 ********
  textSize30Regular: {
    fontSize: fontPixel(30),
   fontWeight:'400',
    color: Colors.black_color,
  },
  textSize30Medium: {
    fontSize: fontPixel(30),
    fontWeight:'500',
    color: Colors.black_color,
  },
  textSize30Bold: {
    fontSize: fontPixel(30),
    fontWeight:'700',
    color: Colors.black_color,
  },
  textSize30SemiBold: {
    fontSize: fontPixel(30),
    fontWeight:'600',
    color: Colors.black_color,
  },
  textSize30ExtraBold: {
    fontSize: fontPixel(30),
    fontWeight:'800',
    color: Colors.black_color,
  },
});
export default CommonStyles;
