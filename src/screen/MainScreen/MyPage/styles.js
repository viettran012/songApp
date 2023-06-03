import {StyleSheet} from 'react-native';
import {color} from '../../../assets/interfaces';

const styles = StyleSheet.create({
  pageWrapper: {
    // backgroundColor: color.blue,
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitleWrapper: {
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 17,
  },
  //user info area
  myInfoArea: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,

    // height: 2000,
  },
  avatarWrapper: {
    height: 65,
    width: 65,
    backgroundColor: color.transparentBlack,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarWrapperLg: {
    height: 65,
    width: 65,
    overflow: 'hidden',
    marginRight: 12,
    borderRadius: 60,
  },
  userNameWrapper: {
    flex: 1,
  },
  infoBasicWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  loginBtnWrapper: {
    backgroundColor: color.blueL,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 50,
  },
  loginBtnText: {
    color: color.white,
  },

  //analyst area
  analystArea: {
    // flexDirection: 'row',
    marginBottom: 15,
  },
  analystActionList: {
    flexDirection: 'row',
  },

  analystActionWrapper: {
    height: 90,
    width: 90,
    backgroundColor: color.transparentBlack,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconAnalystActionWrapper: {
    height: 35,
    width: 35,
    marginBottom: 7,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textAnalystActionWrapper: {},

  //playlist area
  playListArea: {
    marginBottom: 15,
  },

  //user Info
  userNameText: {
    fontSize: 20,
  },

  //playList
  playListWrapper: {
    backgroundColor: color.grayBg,
    borderRadius: 8,
    paddingVertical: 10,
  },

  playListItemAddWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  addIconWrapper: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: color.gray600,
    marginRight: 10,
  },
  playListText: {
    color: color.mainText,
    fontSize: 15,
    marginBottom: 4,
  },
  playListDesText: {
    color: color.mainTextL2,
    fontSize: 13,
  },
  iconImagePlayListWrapper: {
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: color.white,
    marginRight: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  songImgIconSmall: {
    height: '49%',
    width: '49%',
    backgroundColor: color.gray600,
    borderRadius: 2,
    overflow: 'hidden',
    margin: '0.25%',
  },
});

export default styles;
