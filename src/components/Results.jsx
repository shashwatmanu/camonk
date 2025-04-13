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

  return (
    <>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <div>
        <Box display="flex" justifyContent="center" mt={4}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" value={percentage} size={140} color="success" />
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
              <Typography component="div" color="success" sx={{ fontWeight: '500', fontSize: '45px' }}>
                {totalCorrect}
              </Typography>
              <Typography variant="caption" component="div" color="success" >
                Overall Score
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  </div>
</>

  );
};

export default Results;
