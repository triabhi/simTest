/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import { View, Text, Modal,} from 'react-native'
 import { createAppContainer } from "react-navigation";
 import AppNavigator from './navigation/navigation';
 import NavigationService from './navigation/navigationService'
 import { useDispatch, useSelector } from 'react-redux'
 import { errorMsg,successMsg } from './actions/index';
 import { SafeAreaView } from 'react-navigation';
 const AppContainer = createAppContainer(AppNavigator)


 const App = () => {
   const [showError, setShowError] = useState(false)
   const [showSuccess, setShowSuccess] = useState(false)
   const success = useSelector(state => state.successMsg)
   const error = useSelector(state => state.errorMsg)
   const dispatch = useDispatch()
   useEffect(() => {
     if (error && error.length > 0) {
       setShowError(true)
       setTimeout(() => {
         setShowError(false)
         dispatch(errorMsg(''))
       }, 3000)
     }
   }, [error])
 
   useEffect(() => {
     if (success && success.length > 0) {
       setShowSuccess(true)
       setTimeout(() => {
         setShowSuccess(false)
         dispatch(successMsg(''))
       }, 3000)
     }
   }, [success])
 
   return (
     <SafeAreaView style={{ flex: 1 }}>
       <View style={{ flex: 1 }}>
         <AppContainer
           ref={navigatorRef => {
             NavigationService.setTopLevelNavigator(navigatorRef);
           }}
         />
         <Modal visible={showError}
           transparent={true}>
           <SafeAreaView style={{ top: 25 }}>
             <View style={{ position: 'absolute', backgroundColor: '#b30000', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ color: 'white', fontSize: 16, paddingVertical: 3 }}>{error}</Text>
             </View>
           </SafeAreaView>
         </Modal>
         <Modal visible={showSuccess}
           transparent={true}>
           <SafeAreaView style={{ top: 25 }}>
             <View style={{ position: 'absolute', backgroundColor: 'green', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ color: 'white', fontSize: 16, paddingVertical: 3 }}>{success}</Text>
             </View>
           </SafeAreaView>
         </Modal>
       </View>
     </SafeAreaView>
   );
 };
 
 
 export default App;