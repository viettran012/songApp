const initialState = {
  focusedPlayList: {},
  headerOpacity: 1,
  isPlayerPage: true,
  isShowLoginSheet: false,
  isLoaderMaskShow: false,
  isShowToast: false,
  isShowCreatePlaylistSheet: false,
  addToPlayListSheet: {
    isShow: false,
    songData: undefined,
  },
  songActionSheet: {
    isShow: false,
    songData: undefined,
  },
  removeToPlayListSheet: {
    isShow: false,
    songData: undefined,
  },
  confirmSheet: {
    isShow: false,
    callback: undefined,
  },
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOCUS_PLAYLIST': {
      const newState = action.payload;
      return {...state, focusedPlayList: newState};
    }
    case 'ADD_TO_PLAYLIST_SHEET': {
      const newState = action.payload;
      return {...state, addToPlayListSheet: newState};
    }
    case 'CONFIRM_SHEET': {
      const newState = action.payload;
      return {...state, confirmSheet: newState};
    }
    case 'SONG_ACTION_SHEET': {
      const newState = action.payload;
      return {...state, songActionSheet: newState};
    }
    case 'SET_SHOW_TOAST': {
      const newState = action.payload;
      return {...state, isShowToast: newState};
    }
    case 'SET_LOADER_MASK_SHOW': {
      const newState = action.payload;
      return {...state, isLoaderMaskShow: newState};
    }
    case 'SET_HEADER_OPACITY': {
      const newState = action.payload;
      return {...state, headerOpacity: newState};
    }
    case 'SET_IS_PLAYER_PAGE': {
      const newState = action.payload;
      return {...state, isPlayerPage: newState};
    }
    case 'SHOW_LOGIN_SHEET': {
      const newState = action.payload;
      return {...state, isShowLoginSheet: newState};
    }
    case 'SHOW_CREATE_PLAYLIST_SHEET': {
      const newState = action.payload;
      return {...state, isShowCreatePlaylistSheet: newState};
    }
    default:
      return state;
  }
};

export default appState;
