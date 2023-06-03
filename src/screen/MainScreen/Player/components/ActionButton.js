import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';

import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {color} from '../../../../assets/interfaces';

import SONG_ACTION from '../../../../item/ACTION';
import {useState} from 'react';
import loginCallback from '../../../../utils/loginCallback';
import store from '../../../../redux/store';

function ActionButton({song}) {
  const [isLiked, setIsLiked] = useState(() => {
    const storeData = store?.getState();
    const listSongFavotite =
      storeData?.user?.initData?.favoriteList?.song?.items;
    if (!listSongFavotite) return false;

    const fvrSong = listSongFavotite?.find(s => s?.encodeId == song?.encodeId);
    return !!fvrSong;
  });

  const handleClick = action => {
    if (action?.id == 'like') {
      loginCallback(() => {
        setIsLiked(!isLiked);
        action?.callback({song: {...song, is_liked: isLiked ? 0 : 1}});
      });
    }
  };

  return SONG_ACTION?.map((action, index) => {
    const IconLib = action?.iconLib;
    return (
      <Button
        onPress={() => {
          handleClick(action);
        }}
        // underlayColor={true}
        key={index}
        style={styles.statisticalWrapper}>
        <>
          <IconLib
            name={action?.inconName}
            size={action?.iconSize || 28}
            color={isLiked ? action?.activeColor || color?.white : color?.white}
          />
          <TextB style={styles.statisticalNumText}></TextB>
        </>
      </Button>
    );
  });
}

export default ActionButton;
