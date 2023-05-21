import {IoniconsIcon} from '../assets/icons';
import {color} from '../assets/interfaces';

import {View, TextInputBase} from 'react-native';
import {TextM, TextB} from '../components/GlobalComponents';

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: color.transparentBlack,
        height: 32,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <IoniconsIcon name="search-outline" size={20} color={color.black} />
      <TextB
        style={{
          marginLeft: 5,
          fontSize: 13,
          color: color.mainTextL1,
        }}>
        Bạn muốn nghe gì?
      </TextB>
    </View>
  );
};

const DISCOVER_HEADER_ITEMS = [
  {
    type: 'icon',
    title: 'Thông báo',
    icon: (
      <IoniconsIcon
        name="notifications-outline"
        size={27}
        color={color.black}
      />
    ),
    callback: () => {},
  },
  {
    type: 'search',
    title: 'Tìm kiếm',
    icon: <Search />,
    callback: () => {},
  },
  {
    type: 'icon',
    title: 'mic',
    icon: <IoniconsIcon name="mic-outline" size={27} color={color.black} />,
    callback: () => {},
  },
];

export {DISCOVER_HEADER_ITEMS};
