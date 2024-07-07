import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';
import Title from '../components/title';

const Result = ({navigation,route}) => {
    const {score}=route.params;
    console.log(score);
  return (
    <View style={styles.container}>
      <Title titleText='RESULTS'/>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/curiosity-brain-concept-illustration_114360-11037.jpg?ga=GA1.1.1165969357.1720335955&semt=sph",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  buttonStyle: {
    backgroundColor: "#184E77",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 30,
  },
  buttonText:{
    color:"white"
  },
  score:{
    fontSize:24,
    fontWeight:"800",
    alignSelf:"center"
  }
});