import {get, post} from '../utils/request';
import API from './API';

function playListService(id) {
  const API_ = `${API.PLAYLIST_INFO_API}?id=${id}`;

  return get(API_).then(data => {
    return data;
  });
}

export default playListService;
