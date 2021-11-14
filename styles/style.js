import { StyleSheet, Dimensions, Platform } from 'react-native';
import {inputBgColor, whiteColor, appBgColor} from './color';

export const style = StyleSheet.create({

  inputContainer: {
    flexDirection: 'column',
    backgroundColor: inputBgColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth:1,
    borderColor:'grey'
  },
  inputText: Platform.OS === "android" ? {
    color: 'black',
    fontSize: 15,
    padding: 0,
    fontFamily: 'Muli'
  } : {
    color: whiteColor,
    fontSize: 15,
    padding: 0,
    fontFamily: 'Avenir-Light'
  },

  emptyComponent: { justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 15, textAlign: 'center', textAlignVertical: 'center' },
  appBg: { flex: 1, backgroundColor: appBgColor, justifyContent: 'center', alignItems: 'center' },
  buttonText: Platform.OS === "android" ? { color: 'white', fontFamily: 'Muli-ExtraBold', } :
    { color: 'white', fontFamily: 'Avenir-Black', }
  ,
  });