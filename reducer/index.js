
const reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'video': //video
    return { ...state, loading: true };
    case 'video_response':
      debugger
      return { ...state, resVideo: action.videoListDetails, loading: false };

    case 'errorMsg':
      console.log('erroMsg: ' + action.data)
      return { ...state, errorMsg: action.data, loading: false };

    case 'successMsg':
      console.log('successMsg: ' + action.data)
      return { ...state, successMsg: action.data, loading: false };
    default:
      return state;
  }



};

export default reducer;