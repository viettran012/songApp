import store from '../redux/store';
import {
  setLoaderMaskShow,
  showCreatePlaylistSheet,
  showLoginSheet,
} from '../redux/actions/appState';

function showMaskLoader(option) {
  store.dispatch(setLoaderMaskShow(option));
}

export {showMaskLoader};
