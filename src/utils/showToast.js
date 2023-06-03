const {setShowToast} = require('../redux/actions/appState');
import store from '../redux/store';

function showToast({content = '', duration = 3000}) {
  store.dispatch(
    setShowToast({
      content,
      duration,
    }),
  );
}

export default showToast;
