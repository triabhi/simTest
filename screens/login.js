import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions,
  Modal
} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler'
import BlueButton from '../components/blue-button';
import { style } from '../styles/style';
import { whiteColor, placeholderColor, grayColor, blackColor, yellowGradient } from '../styles/color';
import { useDispatch, useSelector } from 'react-redux'
import { utils } from '../utils/utils';
import navigation from '../navigation/navigation';
let Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const isLoading = useSelector(state => state.loading);


  const wsLogin = () => {
    let check = utils.isValidEmail(email);
    if (email === '') {
      utils.showMessage('Please enter email')
    } if (!check) {
      utils.showMessage('Please enter valid Email')
    } else if (password === '') {
      utils.showMessage('Please enter password')
    } else if (password.length <= 6) {
      utils.showMessage('Password Characters must be 8 digit')
    } else {
      props.navigation.replace('MyVideo')
    }
  }

  const renderInput = () => (

    <View style={[{ padding: 20 }]}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}>
        <Image source={require("../assets/images/simform.png")}
          style={{ height: 100, width: 150, resizeMode: 'contain', alignSelf: 'center', marginBottom: 60 }} />
        <View style={[style.inputContainer, { marginTop: 15, }]}>
          <Text style={{color: 'grey' }}>Email </Text>
          <TextInput style={[style.inputText,]}
            placeholder={'Email'}
            keyboardType={"email-address"}
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
            placeholdergrayColor={grayColor}
            placeholderTextColor={placeholderColor} />
        </View>

        <View style={[style.inputContainer, { flexDirection: 'row', alignItems: 'center', marginVertical: 15, }]}>
          <View style={{ flex: 1 }}>
            <Text style={{color: 'grey' }}>Password</Text>
            <TextInput style={[style.inputText,]}
              secureTextEntry={!showPassword}
              placeholder={'Password'}
              maxLength={10}
              onChangeText={(password) => setPassword(password)}
              placeholdergrayColor={grayColor}
              placeholderTextColor={placeholderColor} />

          </View>
          <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}>
            <Image source={(showPassword) ? require('../assets/images/hide.png') : require('../assets/images/show.png')}
              style={{ width: 25, height: 25, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
        <BlueButton
          containerStyle={{ marginTop: 15 }}
          title={'LOGIN'}
          colors={yellowGradient}
          textStyle={style.buttonText}
          onPress={() => {
            wsLogin();
          }}
        />
      </ScrollView>
    </View>
  )

  return (
    <>
      <KeyboardAvoidingView enabled={true}
        behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#ffffff", alignItems: 'flex-end', flex: 1, flexDirection: 'row' }}>

          <ScrollView
            keyboardShouldPersistTaps={'handled'}>
            <View>
              {renderInput()}
            </View>
         </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default Login