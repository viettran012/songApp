import {get, post} from '../utils/request';
import API from './API';

function getSongService(id) {
  const API_ = `${API.SONG_INFO_API}?id=${id}`;

  return get(API_).then(data => {
    return data;
  });
}

function getSongInfoService(id) {
  const API_ = `${API.SONG_INFO_DETAILT_API}?id=${id}`;

  return get(API_).then(data => {
    return data;
  });
}

function getSongLyricService(id) {
  const API_ = `${API.SONG_INFO_LYRIC_API}?id=${id}`;

  return get(API_).then(data => {
    return data;
  });
}

export default getSongService;
export {getSongInfoService, getSongLyricService};
