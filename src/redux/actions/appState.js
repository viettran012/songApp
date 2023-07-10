const setFocusPlayList = type => {
  return {
    type: 'SET_FOCUS_PLAYLIST',
    payload: type,
  };
};

const setLoaderMaskShow = type => {
  return {
    type: 'SET_LOADER_MASK_SHOW',
    payload: type,
  };
};

const setHeaderOpacity = type => {
  return {
    type: 'SET_HEADER_OPACITY',
    payload: type,
  };
};

const setIsPlayerPage = type => {
  return {
    type: 'SET_IS_PLAYER_PAGE',
    payload: type,
  };
};

const showLoginSheet = type => {
  return {
    type: 'SHOW_LOGIN_SHEET',
    payload: type,
  };
};

const showCreatePlaylistSheet = type => {
  return {
    type: 'SHOW_CREATE_PLAYLIST_SHEET',
    payload: type,
  };
};

const setShowToast = type => {
  return {
    type: 'SET_SHOW_TOAST',
    payload: type,
  };
};

const addToPlayListSheet = type => {
  return {
    type: 'ADD_TO_PLAYLIST_SHEET',
    payload: type,
  };
};

const songActionSheet = type => {
  return {
    type: 'SONG_ACTION_SHEET',
    payload: type,
  };
};
const playlistActionSheet = type => {
  return {
    type: 'PLAYLIST_ACTION_SHEET',
    payload: type,
  };
};
const confirmSheet = type => {
  return {
    type: 'CONFIRM_SHEET',
    payload: type,
  };
};

const setGradientValue = type => {
  return {
    type: 'SET_GRADIENT_VALUE',
    payload: type,
  };
};

export {
  setFocusPlayList,
  setHeaderOpacity,
  setGradientValue,
  setIsPlayerPage,
  showLoginSheet,
  setLoaderMaskShow,
  setShowToast,
  showCreatePlaylistSheet,
  addToPlayListSheet,
  songActionSheet,
  confirmSheet,
  playlistActionSheet,
};
