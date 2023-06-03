import {confirmSheet} from '../redux/actions/appState';
import store from '../redux/store';

function confirmCallback({
  callback,
  title = 'Title',
  confirmText = 'Đồng ý',
  cancelText = 'Huỷ',
  subTitle = '',
}) {
  store?.dispatch(
    confirmSheet({
      isShow: Math.random(),
      callback,
      title,
      confirmText,
      cancelText,
      subTitle,
    }),
  );
}

export default confirmCallback;
