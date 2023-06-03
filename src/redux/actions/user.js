const setUserInFo = type => {
  return {
    type: 'SET_USER_INFO',
    payload: type,
  };
};

const setUserInitData = type => {
  return {
    type: 'SET_USER_INIT_DATA',
    payload: type,
  };
};

export {setUserInFo, setUserInitData};
