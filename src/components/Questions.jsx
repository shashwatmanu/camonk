import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import { Button } from '@mui/material';
import Steps from './Steps';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Questions = ({ questions, setCurrentQuestionIndex, currentQuestionIndex, saveAnswer}) => {
  const [filledBlanks, setFilledBlanks] = useState([null, null, null, null]);
  const [usedIndices, setUsedIndices] = useState([]);
  const navigate = useNavigate();

  const currentQ = questions[currentQuestionIndex];
  const sentenceParts = currentQ.question.split('_____________');

  const onTimeUp = () => {
    const currentAnswers = filledBlanks.map(b => b || '');

  saveAnswer(currentQuestionIndex, currentAnswers);

  setFilledBlanks([null, null, null, null]);
  setUsedIndices([]);
  setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleOptionClick = (word, index) => {
    if (usedIndices.includes(index)) return; 

    const nextEmptyIndex = filledBlanks.findIndex(b => b === null);
    if (nextEmptyIndex === -1) return;

    const newBlanks = [...filledBlanks];
    newBlanks[nextEmptyIndex] = { word, index };

    setFilledBlanks(newBlanks);
    setUsedIndices([...usedIndices, index]);
  };

  const handleBlankClick = (i) => {
    const newBlanks = [...filledBlanks];
    const removed = newBlanks[i];

    if (removed) {
      setUsedIndices(usedIndices.filter(idx => idx !== removed.index));
      newBlanks[i] = null;
      setFilledBlanks(newBlanks);
    }
  };

  const isNextEnabled = filledBlanks.every(b => b !== null);

  const handleNextClick = () => {
    if (!isNextEnabled) return;
    saveAnswer(currentQuestionIndex, filledBlanks);
  
   
    setFilledBlanks([null, null, null, null]);
    setUsedIndices([]);
  
    
    if (currentQuestionIndex === questions.length - 1) {
    
      navigate('/results');
    } else {
      
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };



  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ height: '650px', width: '975px', boxShadow: '0px 4px 50px rgba(69, 69, 69, 0.07)', borderRadius: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
          <Timer onTimeUp={onTimeUp} key={currentQuestionIndex}/>
          <Button variant='outlined' sx={{ borderRadius: '8px', borderColor: 'gray', textTransform: 'none', fontSize: '18px', fontWeight: '500', color: 'rgba(65, 67, 67, 1)' }}>Quit</Button>
        </div>

        <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <Steps stepNumber={currentQuestionIndex+1}/>

          <p style={{ fontWeight: '600', fontSize: '20px', color: 'rgba(97, 100, 100, 1)', textAlign: 'center', marginTop: '56px', marginBottom: '64px' }}>
            Select the missing words in the correct order
          </p>

         
          <p style={{ fontWeight: '500', fontSize: '24px', color: 'rgba(42, 45, 45, 1)', marginBottom: '60px' }}>
            {sentenceParts.map((chunk, i) => (
              <React.Fragment key={i}>
                {chunk}
                {i < 4 && (
                  <span
                    onClick={() => handleBlankClick(i)}
                    style={{
                      display: 'inline-block',
                      minWidth: '100px',
                      padding: '4px 8px',
                      margin: '0 4px',
                      backgroundColor: filledBlanks[i] ? '#f2a531' : '#eee',
                      borderRadius: '6px',
                      cursor: filledBlanks[i] ? 'pointer' : 'default',
                      color: filledBlanks[i] ? 'white' : 'gray',
                      textAlign: 'center',
                    }}
                  >
                    {filledBlanks[i] ? filledBlanks[i].word : '_______'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>

         
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            {currentQ.options.map((option, index) => {
              const isUsed = usedIndices.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option, index)}
                  style={{
                    height: '38px',
                    padding: '8px 12px',
                    border: '1px solid rgba(191, 198, 198, 1)',
                    borderRadius: '8px',
                    lineHeight: '38px',
                    fontWeight: '500',
                    fontSize: '16px',
                    marginRight: '20px',
                    cursor: isUsed ? 'not-allowed' : 'pointer',
                    opacity: isUsed ? 0.4 : 1
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>

        
          <div
            style={{
              justifySelf: 'flex-end',
              height: '64px',
              width: '64px',
              borderRadius: '8px',
              border:'1px solid rgba(223, 227, 227, 1)',
              lineHeight: '64px',
              textAlign: 'center',
              fontSize: '40px',
              cursor: isNextEnabled ? 'pointer' : 'default',
              backgroundColor:isNextEnabled?'rgba(69, 63, 225, 1)':''
            }}
            onClick={handleNextClick}
          >
            <ArrowForwardIcon sx={{ color:'rgba(223, 227, 227, 1)'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
