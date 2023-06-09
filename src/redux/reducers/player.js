const initialState = {
  currSong: undefined,
  currPlayList: undefined,
  currTime: 0,
  isPlaying: false,
  currTimeSong: {},
  currLyric: {},
  isShowListSheet: false,
  isPlayingSong: {},
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURR_SONG': {
      const newState = action.payload;
      const currSongId = state?.currSong?.encodeId;
      if (newState?.encodeId === currSongId) {
        return {...state};
      }
      return {
        ...state,
        currSong: newState,
        currLyric: {},
        currTime: 0,
        currTimeSong: {},
      };
    }
    case 'SET_IS_PLAYING': {
      const newState = action.payload;
      return {...state, isPlaying: newState};
    }
    case 'SET_CURR_TIME': {
      const newState = action.payload;
      return {...state, currTime: newState};
    }
    case 'SHOW_LIST_SHEET': {
      const newState = action.payload;
      return {...state, isShowListSheet: newState};
    }
    case 'SET_CURR_LYRIC': {
      const newState = action.payload;
      return {...state, currLyric: newState};
    }
    case 'SET_CURR_TIME_SONG': {
      const newState = action.payload;
      return {...state, currTimeSong: newState || {}};
    }
    case 'SET_CURR_PLAYLIST': {
      const newState = action.payload;
      const songList = newState[0]?.song?.items;
      // console.log(songList?.length);
      let currIndex = songList?.findIndex(
        song => newState[1]?.encodeId == song.encodeId,
      );
      const songCutList = songList?.splice(0, currIndex);
      // console.log(songCutList?.length);
      // console.log(songList?.length);

      newState[0].song.items = [...songList, ...songCutList];

      return {...state, currPlayList: newState[0], currSong: newState[1]};
    }
    case 'TOGGLE_PLAYING': {
      const newState = action.payload;
      const currPlaying = state.isPlaying;
      const currSong = state?.currSong;
      return {
        ...state,
        isPlaying: !currPlaying,
        isPlayingSong: {
          [currSong?.encodeId]: {isPlaying: !currPlaying, key: Math.random()},
        },
      };
    }
    case 'NEXT_SONG': {
      const currSongId = state?.currSong?.encodeId;
      const currPlayList = state?.currPlayList;
      const playListLenght = currPlayList?.song?.items?.length;

      const currIndex = currPlayList?.song?.items?.findIndex(
        song => currSongId == song.encodeId,
      );

      const resultSong =
        currPlayList?.song?.items[
          currIndex + 1 <= playListLenght - 1 ? currIndex + 1 : 0
        ];

      // console.log(resultSong);
      return {
        ...state,
        currSong: resultSong,
        currLyric: {},
        currTime: 0,
        currTimeSong: {},
      };
    }

    default:
      return state;
  }
};

export default player;
