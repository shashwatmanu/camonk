import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import './Results.css'; // Import the CSS file

const Results = ({ userAnswers, questions }) => {
  const totalCorrect = questions.reduce((score, q, i) => {
    const correct = q.correctAnswer;
    const user = userAnswers[i] || [];
    const isCorrect = correct.every((word, idx) => word === user[idx]);
    return score + (isCorrect ? 1 : 0);
  }, 0);

  const percentage = (totalCorrect / questions.length) * 100;

  const fillInTheBlanks = (sentence, words) => {
    const parts = sentence.split(/(_____________)/g);
    let wordIndex = 0;

    return parts.map((part, idx) => {
      if (part === '_____________') {
        const word = words[wordIndex++] || '_____';
        return (
          <span
            key={idx}
            style={{ fontStyle: 'italic', textDecoration: 'underline dotted' }}
          >
            {word}
          </span>
        );
      } else {
        return <span key={idx}>{part}</span>;
      }
    });
  };

  return (
    <>
      <div className="results-container">
        <div className="results-main">
          <div>
            <Box display="flex" justifyContent="center" mt={4}>
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={percentage}
                  size={140}
                  color="success"
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    component="div"
                    color="success"
                    sx={{ fontWeight: '500', fontSize: '45px' }}
                  >
                    {totalCorrect}
                  </Typography>
                  <Typography variant="caption" component="div" color="success">
                    Overall Score
                  </Typography>
                </Box>
              </Box>
            </Box>
            <div className="result-description">
              <p style={{ marginTop: '40px' }}>
                While you correctly formed several sentences, there are a couple of areas where improvement is needed.
                Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review
                your responses below for more details.
              </p>
            </div>
          </div>
        </div>

        {questions.map((q, index) => {
          const userResponse = userAnswers[index] || [];
          const isAllNull = userResponse.every(ans => ans === null);
          const isCorrect = q.correctAnswer.every(
            (word, i) => word === userResponse[i]
          );

          return (
            <div
              key={q.questionId}
              className={`question-card ${isCorrect ? 'correct' : isAllNull ? 'null' : 'incorrect'}`}
            >
              <div className="question-header">
                <div className="header-content">
                  <div className="prompt-label">Prompt</div>
                  <div>
                    {index + 1}/
                    <span style={{ color: 'rgba(124, 129, 129, 1)' }}>
                      {questions.length}
                    </span>
                  </div>
                </div>
                <div className="answer-container">
                  {fillInTheBlanks(q.question, q.correctAnswer)}
                </div>
              </div>

              <div>
                <div className="question-status">
                  Your response{' '}
                  <span
                    className={`response-status ${isAllNull ? 'null' : isCorrect ? 'correct' : 'incorrect'}`}
                  >
                    {isAllNull
                      ? 'No Answer provided'
                      : isCorrect
                      ? 'Correct'
                      : 'Incorrect'}
                  </span>
                </div>

                {!isAllNull && (
                  <div className="answer-container">
                    {fillInTheBlanks(q.question, userResponse)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
