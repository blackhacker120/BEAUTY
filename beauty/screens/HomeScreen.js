import {SafeAreaView , Text , View , ImageBackground , Button , StyleSheet} from 'react-native' 
import React , {useLayoutEffect} from 'react' 
import { useNavigation } from '@react-navigation/native' 


import {HeroImage} from '../assets' 



const HomeScreen = () => {
   const navigation = useNavigation() 
   useLayoutEffect(() => { 
       navigation.setOptions({ 
           headerShown : false,
       })
   }, [])
    return (
    <SafeAreaView style = {styles.container}> 
        <View style = {styles.baba}> 
            <ImageBackground style = {styles.mama}  
             source = {HeroImage}
            />
        </View> 

        <View style = {styles.mas}> 
             <Text style = {styles.basi}>HELLO BEAUTY</Text>
            </View> 

        <View style = {styles.cons}> 
            <Button  
             title = {'GET STARTED'} 
             onPress = {'HandlerPress'} 
             color = {'orange'}
            />
        </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({ 
    container : { 
        backgroudColor:'#fff', 
        flex:1, 
    }, 

    baba : {   
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
    }, 

    mama : {   
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        width : 800, 
        height : 800, 
        resizeMode : 'cover', 
        padding:12,
    }, 

    cons : {   
        flex:1,
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:30, 
        marginBottom : 50,
    }, 

    basi : { 
        flex : 1,    
        fontSize:40, 
        justifyContent:'center',  
        margin:30, 
        fontStyle:'italic', 
        textTransform :'uppercase', 
        color : 'green', 
        fontWeight : 'bold',  
        textAlign:'center',  
        textDecorationLine : 'underline',
        alignItems:'center',
    }, 
    mas : { 
        flex : 1,  
        alignItems : 'center', 
        justifyContent : 'center'
        
    }
})

export default HomeScreen
