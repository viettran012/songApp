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
    paddingVertical: 9,
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
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnalystActionWrapper: {},

  //playlist area
  playListArea: {
    marginBottom: 15,
  },
});

export default styles;
