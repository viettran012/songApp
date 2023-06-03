import {color} from '../assets/interfaces';
import {addToPlayListSheet} from '../redux/actions/appState';
import {showListSheet} from '../redux/actions/player';
import store from '../redux/store';
import {likeSong, removeToPlaylist} from '../services/userServices';
import confirmCallback from '../utils/confirmCallback';
import loginCallback from '../utils/loginCallback';
import {preUserData} from '../utils/prepareData';
import showToast from '../utils/showToast';

const {
  MaterialCommunityIconsIcon,
  IoniconsIcon,
  FontistoIcon,
  OcticonsIcon,
  AntDesignIcon,
} = require('../assets/icons');

const SONG_ACTION = [
  {
    id: 'like',
    title: 'yêu thích',
    iconLib: IoniconsIcon,
    inconName: 'heart',
    iconSize: 30,
    activeColor: color.heart,
    callback: function ({song}) {
      showToast({
        content: `Đã${song?.is_liked ? '' : ' bỏ'} thích`,
        duration: 2000,
      });
      likeSong(song)
        .then(fb => {
          if (fb?.result == 1) {
            preUserData();
          }
        })
        .catch(error => {});
    },
  },

  {
    id: 'comment',
    title: 'bình luận',
    iconLib: MaterialCommunityIconsIcon,
    inconName: 'comment',
    iconSize: 27,
    callback: function () {},
  },
  {
    id: 'share',
    title: 'chia sẻ',
    iconLib: FontistoIcon,
    inconName: 'share-a',
    iconSize: 24,
    callback: function () {},
  },
];

const SONG_DETAIL_ACTION = [
  {
    id: 'repeat',
    title: 'Lặp lại',
    iconLib: IoniconsIcon,
    iconName: 'repeat-outline',
    iconSize: 32,
    iconColor: color.mainTextL2,
    callback: function () {},
  },
  {
    id: 'playlist-plus',
    title: 'Thêm vào playlist',
    iconLib: MaterialCommunityIconsIcon,
    iconName: 'playlist-plus',
    iconSize: 30,
    iconColor: color.mainTextL2,
    callback: function () {
      store?.dispatch(showListSheet(false));
      const allState = store?.getState();
      if (allState) {
        const currSong = allState?.player?.currSong;
        if (currSong) {
          store.dispatch(
            addToPlayListSheet({isShow: Math.random(), songData: currSong}),
          );
        }
      }
    },
  },
];

const SONG_SHEET_ACTION = [
  {
    id: 'playlist-plus',
    title: 'Thêm vào playlist',
    iconLib: MaterialCommunityIconsIcon,
    iconName: 'playlist-plus',
    iconSize: 30,
    iconColor: color.mainTextL2,
    callback: function ({song}) {
      if (song) {
        store.dispatch(
          addToPlayListSheet({isShow: Math.random(), songData: song}),
        );
      }
    },
  },
  {
    id: 'singer',
    title: 'Nghệ sĩ',
    iconLib: IoniconsIcon,
    iconName: 'person-outline',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },

  {
    id: 'download',
    title: 'Tải về',
    iconLib: OcticonsIcon,
    iconName: 'download',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },
];

const SONG_USER_SHEET_ACTION = [
  {
    id: 'singer',
    title: 'Nghệ sĩ',
    iconLib: IoniconsIcon,
    iconName: 'person-outline',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },

  {
    id: 'download',
    title: 'Tải về',
    iconLib: OcticonsIcon,
    iconName: 'download',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },
  {
    id: 'delete-song-to-platlist',
    title: 'Xoá khỏi playlist',
    iconLib: AntDesignIcon,
    iconName: 'delete',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function ({song, playList, callbackReturn, callbackReturnAsync}) {
      confirmCallback({
        title: 'Xoá bài hát ?',
        subTitle: `Bạn có chắc chắn muốn xoá bài ${song?.title}`,
        confirmText: 'Xoá',
        cancelText: 'Huỷ',
        callback: () => {
          const body = {
            encodeId: song?.encodeId,
            playlistId: playList?.encodeId,
          };
          removeToPlaylist(body).then(fb => {
            if (fb?.result == 1) {
              preUserData();
            }
            if (callbackReturnAsync) {
              callbackReturnAsync({...fb, type: 'delete'});
            }
          });
          if (callbackReturn) {
            callbackReturn({type: 'delete'});
          }
        },
      });
    },
  },
];

const SONG_USER_FV_SHEET_ACTION = [
  {
    id: 'singer',
    title: 'Nghệ sĩ',
    iconLib: IoniconsIcon,
    iconName: 'person-outline',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },

  {
    id: 'download',
    title: 'Tải về',
    iconLib: OcticonsIcon,
    iconName: 'download',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function () {},
  },
  {
    id: 'delete-song-to-platlist',
    title: 'Bỏ thích',
    iconLib: IoniconsIcon,
    iconName: 'heart-dislike-outline',
    iconSize: 24,
    iconColor: color.mainTextL2,
    callback: function ({song, playList, callbackReturn, callbackReturnAsync}) {
      confirmCallback({
        title: 'Bỏ thích bài hát ?',
        subTitle: `Bạn có chắc chắn muốn bỏ thích bài ${song?.title}`,
        confirmText: 'Bỏ thích',
        cancelText: 'Huỷ',
        callback: () => {
          song.is_liked = 0;
          likeSong(song).then(fb => {
            if (fb?.result == 1) {
              preUserData();
            }
            if (callbackReturnAsync) {
              callbackReturnAsync({...fb, type: 'delete'});
            }
          });
          if (callbackReturn) {
            callbackReturn({type: 'delete'});
          }
        },
      });
    },
  },
];

export default SONG_ACTION;

export {
  SONG_DETAIL_ACTION,
  SONG_SHEET_ACTION,
  SONG_USER_SHEET_ACTION,
  SONG_USER_FV_SHEET_ACTION,
};
