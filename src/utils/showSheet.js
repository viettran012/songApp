import store from '../redux/store';
import {
  showCreatePlaylistSheet,
  showLoginSheet,
} from '../redux/actions/appState';

function createPlaylist(options) {
  if (options?.hidden) {
    return store.dispatch(showCreatePlaylistSheet(false));
  }
  const isLogin = store?.getState()?.user?.isLogin;
  if (isLogin) {
    store.dispatch(showCreatePlaylistSheet(Math.random()));
  }
}

export {createPlaylist};
