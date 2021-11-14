export const apiVideoDetails = () => ({ type: 'video' }); //video

export const errorMsg = data => ({ type: 'errorMsg', data }); //errorMsg
export const successMsg = data => ({ type: 'successMsg', data }); //successMsg