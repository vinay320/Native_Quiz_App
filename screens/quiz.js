import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
    const [questions,setQuestions]=useState();
    const [ques,setQues]=useState(0);
    const [options,setOptions]=useState([]);
    const [score,setScore]=useState(0);
    const getQuiz=async ()=>
    {
        const url =
          "https://opentdb.com/api.php?amount=10&category=22&encode=url3986";
        const res= await fetch(url);
        const data= await res.json();
        setQuestions(data.results);
        setOptions(generateOptions(data.results[0]));
        
        
    }
    useEffect(()=>
    {
        getQuiz();
    },[])

    const generateOptions=(_questions)=>
    {
      
        const arr= [
          _questions.correct_answer,
          ..._questions.incorrect_answers];
          console.log(arr);
          
          return arr.sort(() => Math.random() - 0.5); 
       
    }
const handleNextPress=()=>
{
    setQues(ques+1);
    setOptions(generateOptions(questions[ques+1]));
}


const handleSelectedOptions=(_option)=>
{
    if (_option === questions[ques].correct_answer)
        {
            setScore(score+10);
        } 
        if(ques!==9)
        {
 setQues(ques + 1);
 setOptions(generateOptions(questions[ques + 1]));
        }
       
    }

    const handleShowResult=()=>
    {
        navigation.navigate('Result',{score:score})
    }
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          <View style={styles.options}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={()=> handleSelectedOptions(option)}>
                <Text style={styles.optionsText}>
                  {decodeURIComponent(option)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.button}>
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}

            {ques != 9 ? (
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Quiz")}
              >
                <Text style={styles.buttonText} onPress={handleNextPress}>
                  NEXT
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleShowResult}
              >
                <Text style={styles.buttonText}>SHOW RESULT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  button: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonStyle: {
    backgroundColor: "#184E77",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  question: {
    fontSize: 28,
  },
  optionsText: {
    fontSize: 18,
    padding: 12,
    margin: 10,
    backgroundColor: "#E8EAF6",
    borderRadius: 15,
  },
  parent:{
    height:'100%'
  }
 });

