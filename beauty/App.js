import {StatusBar} from 'expo-status-bar' 
import { TailwindProvider } from 'tailwindcss-react-native'
import {SafeAreaView , View , Text } from 'react-native' 
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator() 

export default function App(){ 
  return ( 
      <TailwindProvider> 
         <NavigationContainer> 
           <Stack.Navigator> 
             <Stack.Screen name = "Home" component = {HomeScreen} />
           </Stack.Navigator>
         </NavigationContainer>
      </TailwindProvider>
  )
}

