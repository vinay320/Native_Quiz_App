import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='Quizz'/>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/curiosity-brain-concept-illustration_114360-11037.jpg?ga=GA1.1.1165969357.1720335955&semt=sph",
          }}
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20, 
        height:"100%"
       },
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    button:{
        width:'100%',
        backgroundColor:"#184E77",
        padding:16,
        borderRadius:16,
        alignItems:"center",
        marginBottom:30
    },
    buttonText:{
        color:"white",
        fontSize:24,
        fontWeight:'600',
    }
})