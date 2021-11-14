import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, Platform, Dimensions } from 'react-native';
import { style } from '../styles/style'
import { whiteColor,} from '../styles/color';
import { useDispatch, useSelector } from 'react-redux'
import { apiVideoDetails } from '../actions';
import Video from 'react-native-video';
let MyVideo = (props) => {
    const dispatch = useDispatch()
    const resVideo = useSelector(state => state.resVideo)
    const [videoArr, setVideoArr] = useState([])
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        wsVideoDetail();
    }, [])

    useEffect(() => {
        if (resVideo && resVideo) {
            setVideoArr(resVideo.videos)
            setIsLoading(false)
        } else {
            console.log('resVideoFail');
            setVideoArr([])
        }
    }, [resVideo])

    const wsVideoDetail = () => {
        setIsLoading(true)
        dispatch(apiVideoDetails())
    }

    const renderVideoList = ({ item }) => {
        return <View style={{ paddingVertical: 10, marginTop: 10, backgroundColor: whiteColor, borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}>
            <Video source={{ uri: item.video_url }}   // Can be a URL or a local file.
                style={{ width: 300, height: 300, alignSelf: 'center' }}
                controls={false}
            />
        </View>
    }
    return (
        <View style={style.appBg}>
            {loading ?<ActivityIndicator size={'large'} color={'red'}/> : null}
            <Text style={{textAlign: 'center', color :'black', fontSize: 20}}>Videos </Text>
            <FlatList
                style={{ flex: 1 }}
                data={videoArr}
                renderItem={renderVideoList}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={
                    <Text style={style.emptyComponent}>No records available.</Text>
                }
            />
        </View>
    );
}
export default MyVideo;