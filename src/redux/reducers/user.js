const initialState = {
  userInfo: {},
  isLogin: false,
  initData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO': {
      const newState = action.payload;
      return {
        ...state,
        userInfo: newState,
        isLogin: newState?.user?.uid ? true : false,
      };
    }

    case 'SET_USER_INIT_DATA': {
      const newState = action.payload;
      return {
        ...state,
        initData: newState,
      };
    }

    default:
      return state;
  }
};

export default user;
