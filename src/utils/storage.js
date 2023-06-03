import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

async function getItem(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    return false;
  }
}

async function updateArrayItem(key, obj, callback, callbackFalse) {
  try {
    const data = await AsyncStorage.getItem(key);
    // if (!data) return false;
    const currentItem = data ? JSON.parse(data) : [];
    const updateItem = [...currentItem, obj];

    try {
      await AsyncStorage.setItem(key, JSON.stringify(updateItem));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
      if (callbackFalse) {
        callbackFalse();
      }
    }
  } catch (e) {
    return 0;
  }
}

async function updateArrayLoginItem(key, obj, callback, callbackFalse) {
  try {
    let isExist;
    if (!obj?.isSaveData) {
      obj.pwd = '';
    }
    const data = await AsyncStorage.getItem(key);
    // if (!data) return false;
    const currentItem = data ? JSON.parse(data) : [];

    // console.log(currentItem);

    for (index in currentItem) {
      const item = currentItem[index];
      if (item?.username == obj?.username) {
        currentItem[index] = obj;
        isExist = true;
      }
    }

    const updateItem = isExist ? currentItem : [...currentItem, obj];

    // console.log(updateItem);

    try {
      await AsyncStorage.setItem(key, JSON.stringify(updateItem));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
      if (callbackFalse) {
        callbackFalse();
      }
    }
  } catch (e) {
    return 0;
  }
}

async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

const storage = {
  setItem,
  getItem,
  removeItem,
  updateArrayItem,
  updateArrayLoginItem,
};

export default storage;
