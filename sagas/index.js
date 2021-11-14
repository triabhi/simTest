import { put, all, takeEvery } from 'redux-saga/effects';
import { api } from '../webservice/api';

function* fetchVideo() {
  try {
    const videoListDetails = yield api.getWithToken('/videos'); 
     yield put({type: 'video_response', videoListDetails});
  } catch (e) {
     yield put({type: 'video_response', message: e.message});
  }
}

function* userSaga() {
  yield takeEvery('video', fetchVideo);
}
export default function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}