const setCurrSong = type => {
  return {
    type: 'SET_CURR_SONG',
    payload: type,
  };
};

const nextSong = type => {
  return {
    type: 'NEXT_SONG',
    payload: type,
  };
};

const showListSheet = type => {
  return {
    type: 'SHOW_LIST_SHEET',
    payload: type,
  };
};

const setCurrPlayList = type => {
  return {
    type: 'SET_CURR_PLAYLIST',
    payload: type,
  };
};
const setIsPlaying = type => {
  return {
    type: 'SET_IS_PLAYING',
    payload: type,
  };
};
const setCurrTime = type => {
  return {
    type: 'SET_CURR_TIME',
    payload: type,
  };
};
const setCurrTimeSong = type => {
  return {
    type: 'SET_CURR_TIME_SONG',
    payload: type,
  };
};
const setCurrLyric = type => {
  return {
    type: 'SET_CURR_LYRIC',
    payload: type,
  };
};
const togglePlaying = type => {
  return {
    type: 'TOGGLE_PLAYING',
    payload: type,
  };
};

export {
  togglePlaying,
  setCurrSong,
  setCurrTime,
  setCurrPlayList,
  nextSong,
  setIsPlaying,
  setCurrTimeSong,
  setCurrLyric,
  showListSheet,
};
