const setFocusPlayList = type => {
  return {
    type: 'SET_FOCUS_PLAYLIST',
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

export {setFocusPlayList, setHeaderOpacity, setIsPlayerPage};
