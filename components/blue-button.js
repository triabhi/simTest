import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { blueColor, whiteColor } from '../styles/color'
import LinearGradient from 'react-native-linear-gradient';

const BlueButton = ({ title, onPress, containerStyle, colors, textStyle }) => (
    <LinearGradient colors={colors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[{ minWidth: 200, borderRadius: 5, }, containerStyle]}>
        <TouchableOpacity style={{ padding: 12, }} onPress={onPress}>
            <Text style={[{ color: whiteColor, fontSize: 16, textAlign: 'center' }, textStyle]}>{title}</Text>
        </TouchableOpacity>
    </LinearGradient>
)
export default BlueButton