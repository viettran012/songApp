import {setGradientValue, setHeaderOpacity} from '../redux/actions/appState';
import store from '../redux/store';
const maxScrollValue = 300;

const handleBodyScroll = event => {
  const scroll = event.nativeEvent.contentOffset.y || 0;
  let value = ((maxScrollValue - scroll) / maxScrollValue) * 99;
  let opacity = (scroll / maxScrollValue) * 1;
  value = Math.floor(value);
  if (value > 99) value = 99;
  if (value < 10 && value > 0) value = `0${value}`;
  if (value <= 0) value = '00';

  opacity = opacity < 0 ? 0 : opacity.toFixed(2);

  store?.dispatch(setGradientValue(String(value) || '00'));
  store?.dispatch(setHeaderOpacity(Number(opacity)));
};

export {handleBodyScroll};
