const {OcticonsIcon, EntypoIcon} = require('../assets/icons');
const {color} = require('../assets/interfaces');

const USER_ANALYST_ACTION_ITEMS = [
  {
    title: 'Tải về',
    iconPath: require('../assets/imgIcon/download_icon.png'),
    icon: <OcticonsIcon name="download" color={color.blueL} size={35} />,
    callback: function (navigation) {
      console.log('dowload');
    },
  },
  {
    title: 'Gần đây',
    iconPath: require('../assets/imgIcon/pretime_icon.png'),
    icon: <EntypoIcon name="back-in-time" color={color.blueL} size={35} />,
    callback: function (navigation) {
      console.log('curr');
    },
  },
];

export {USER_ANALYST_ACTION_ITEMS};
