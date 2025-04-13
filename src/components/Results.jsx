import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Results = ({ userAnswers, questions }) => {
  const totalCorrect = questions.reduce((score, q, i) => {
    const correct = q.correctAnswer;
    const user = userAnswers[i] || [];
    const isCorrect = correct.every((word, idx) => word === user[idx]);
    return score + (isCorrect ? 1 : 0);
  }, 0);

  const percentage = (totalCorrect / questions.length) * 100;

  const fillInTheBlanksReact = (sentence, words) => {
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
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
            <div
              style={{
                width: '743px',
                fontSize: '18px',
                color: 'rgba(42, 45, 45, 1)',
                textAlign: 'center',
                marginBottom:' 60px',
              }}
            >
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
              style={{
                height: isAllNull ? '200px' : '256px',
                width: '700px',
                backgroundColor: 'rgba(246, 249, 249, 1)',
                alignSelf: 'center',
                marginTop: '30px',
                marginBottom:' 30px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isCorrect
                  ? '0px 4px 70px rgba(66, 169, 76, 0.1)'
                  : isAllNull
                  ? '0px 4px 70px rgba(255, 221, 51, 0.1)'
                  : '0px 4px 70px rgba(203, 53, 62, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  height: '50%',
                  borderRadius: '16px 16px 0 0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    fontWeight: '500',
                    fontSize: '14px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(240, 240, 240, 1)',
                      height: '24px',
                      width: '57px',
                      borderRadius: '8px',
                      color: 'rgba(97, 100, 100, 1)',
                      lineHeight: '24px',
                    }}
                  >
                    Prompt
                  </div>
                  <div>
                    {index + 1}/
                    <span style={{ color: 'rgba(124, 129, 129, 1)' }}>
                      {questions.length}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: 'center',
                    marginTop: '5px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    padding: '10px',
                  }}
                >
                  {fillInTheBlanksReact(q.question, q.correctAnswer)}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    padding: '10px',
                    fontWeight: '500',
                    fontSize: '14px',
                    color: 'rgba(42, 45, 45, 1)',
                  }}
                >
                  Your response{' '}
                  <span
                    style={{
                      color: isAllNull
                        ? 'rgba(155, 140, 0, 1)'
                        : isCorrect
                        ? 'rgba(49, 127, 57, 1)'
                        : 'rgba(158, 41, 48, 1)',
                      backgroundColor: isAllNull
                        ? 'rgba(255, 249, 196, 1)'
                        : isCorrect
                        ? 'rgba(238, 251, 239, 1)'
                        : 'rgba(252, 235, 236, 1)',
                      borderRadius: '16px',
                      padding: '2px 4px',
                    }}
                  >
                    {isAllNull
                      ? 'No Answer provided'
                      : isCorrect
                      ? 'Correct'
                      : 'Incorrect'}
                  </span>
                </div>

                {!isAllNull && (
                  <div
                    style={{
                      alignSelf: 'center',
                      marginTop: '10px',
                      marginBottom: '20px',
                      textAlign: 'center',
                      padding: '10px',
                    }}
                  >
                    {fillInTheBlanksReact(q.question, userResponse)}
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
