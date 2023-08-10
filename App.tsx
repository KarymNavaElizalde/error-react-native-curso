import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico'
//import { StackNavigator } from './src/navigator/StackNavigator'

//distributionUrl=https\://services.gradle.org/distributions/gradle-8.0.1-all.zip

const App =  ( ) => {

  return (
    <NavigationContainer>
      {/*  <StackNavigator /> */}
      <MenuLateralBasico /> 
    </NavigationContainer>
  )
}

export default App
 
