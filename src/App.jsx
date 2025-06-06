import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import First from './components/First';
import Questions from './components/Questions';
import Results from './components/Results'; 
import mockData from '../db.json';

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
    const isLocalhost = window.location.hostname === 'localhost';

    if (isLocalhost) {
      // Fetch data from local json-server when running locally
      axios
        .get('http://localhost:3001/data')
        .then((res) => {
          setQuestions(res.data.questions);
        })
        .catch((err) => {
          console.error('Error fetching questions from json-server:', err);
        });
    } else {
      // Use mock data when deployed on Vercel
      setQuestions(mockData.data.questions);
    }
  }, []);


  return (
    <Router>
      
      <Routes>
        <Route
          path="/"
          element={
            !isQuizStarted ? (
              <>
              <Navbar />
              <First setIsQuizStarted={setIsQuizStarted} />
              </>
             
            ) : (
              <Questions
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                saveAnswer={saveAnswer}
                resetQuizState={() => {
                  setUserAnswers([]);
                  setCurrentQuestionIndex(0);
                  setIsQuizStarted(false);
                }}
              />
            )
          }
        />
        <Route
          path="/results"
          element={
            <>
           <Navbar
            isResultsPage={true}
            resetQuizState={() => {
            setUserAnswers([]);
            setCurrentQuestionIndex(0);
            setIsQuizStarted(false);
          }}
        />
          <Results userAnswers={userAnswers} questions={questions}/>
          </>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
