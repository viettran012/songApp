const initialState = {
  focusedPlayList: {},
  headerOpacity: 1,
  isPlayerPage: true,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOCUS_PLAYLIST': {
      const newState = action.payload;
      return {...state, focusedPlayList: newState};
    }
    case 'SET_HEADER_OPACITY': {
      const newState = action.payload;
      return {...state, headerOpacity: newState};
    }
    case 'SET_IS_PLAYER_PAGE': {
      const newState = action.payload;
      return {...state, isPlayerPage: newState};
    }
    default:
      return state;
  }
};

export default appState;
