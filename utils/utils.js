import { store } from '../index'
import { errorMsg } from '../actions';

const isValidEmail = (mail) => {
    console.log('mail', mail);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

const showMessage = (message) => {
    const { dispatch } = store;
    dispatch(errorMsg(message))
}


export const utils = {
    isValidEmail,
    showMessage,
}