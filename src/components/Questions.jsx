import React, { useState } from 'react';
import Timer from './Timer';
import { Button } from '@mui/material';
import Steps from './Steps';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import './Questions.css';

const Questions = ({
  questions,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  saveAnswer,
  resetQuizState,
}) => {
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

  const handleBlankClick = i => {
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

  const handleQuit = () => {
    if (typeof resetQuizState === 'function') resetQuizState();
    navigate('/');
  };

  return (
    <div className="question-container">
      <div className="quiz-box">
        <div className="quiz-header">
          <Timer onTimeUp={onTimeUp} key={currentQuestionIndex} />
          <Button
            variant="outlined"
            onClick={handleQuit}
            className="quit-button"
          >
            Quit
          </Button>
        </div>

        <div className="quiz-content">
          <Steps stepNumber={currentQuestionIndex + 1} />

          <p className="instruction-text">
            Select the missing words in the correct order
          </p>

          <p className="sentence-display">
            {sentenceParts.map((chunk, i) => (
              <React.Fragment key={i}>
                {chunk}
                {i < 4 && (
                  <span
                    onClick={() => handleBlankClick(i)}
                    className={`blank ${
                      filledBlanks[i] ? 'filled' : 'empty'
                    }`}
                  >
                    {filledBlanks[i] ? filledBlanks[i].word : '_______'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>

          <div className="options-container">
            {currentQ.options.map((option, index) => {
              const isUsed = usedIndices.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option, index)}
                  className={`option-button ${isUsed ? 'disabled' : ''}`}
                >
                  {option}
                </div>
              );
            })}
          </div>

          <div
            className={`next-button ${isNextEnabled ? 'active' : ''}`}
            onClick={handleNextClick}
          >
            <ArrowForwardIcon sx={{ color: 'rgba(223, 227, 227, 1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
