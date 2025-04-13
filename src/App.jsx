import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Navbar from './components/Navbar';
import First from './components/First';
import Questions from './components/Questions';
// import Sentence from './components/Sentence'; 

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

const saveAnswer = (questionIndex, filledBlanks) => {
  const answer = filledBlanks.map(b => b?.word || null);
  setUserAnswers(prev => {
    const updated = [...prev];
    updated[questionIndex] = answer;
    return updated;
  });
};




  useEffect(() => {
    axios.get('http://localhost:3001/data')  
      .then((res) => {
        setQuestions(res.data.questions); 
      })
      .catch((err) => {
        console.error('Error fetching questions:', err);
      });
  }, []);


  return (
    <>
    {!isQuizStarted && (<>
    <Navbar/>
    <First setIsQuizStarted={setIsQuizStarted}/>
    </>
    )}
    {isQuizStarted && (
      <>
      <Questions setCurrentQuestionIndex={setCurrentQuestionIndex}
       questions={questions} 
       currentQuestionIndex={currentQuestionIndex} 
       saveAnswer={saveAnswer}/>
      </>
    )}
    
    </>
  );
};

export default App;
