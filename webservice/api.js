import NetInfo from "@react-native-community/netinfo";
import { store } from '../index'
import { errorMsg } from '../actions';
const apiUrl = 'https://private-c31a5-task27.apiary-mock.com'

const uploadUrl = apiUrl + "/uploads/";

const getWithToken = async function (url) {
  console.log('API url: ' + JSON.stringify(apiUrl + url))
  const { dispatch } = store;
  const response = await NetInfo.fetch();
  if ((response.isConnected && response.isInternetReachable)) {
    return await fetch(apiUrl + url, {
      method: 'get',
    })
      .then(res => res.json())
      .then((res) => {
        console.log('API response: ' + JSON.stringify(res))
        if (!res.success && res.errors) {
          
        }
        return res
      })
      .catch(error => {
        console.log('API Error: ' + JSON.stringify(error))
        dispatch(errorMsg('Something went wrong. Please try again later.'))

      });
  } else {
    dispatch(errorMsg('Please check your internet connection.'))


    return undefined
  }
}

export const api = {
  getWithToken,
  apiUrl,
    
};