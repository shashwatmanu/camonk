import React from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from '@mui/material/Button';
import './First.css';

const First = ({ setIsQuizStarted }) => {
  return (
    <div className="first-wrapper">
      <div className="first-card">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EditNoteIcon fontSize="large" style={{ color: 'gray' }} />
        </div>

        <p style={{ fontWeight: 600, fontSize: '40px', textAlign: 'center', marginTop: '20px' }}>
          Sentence Construction
        </p>

        <p className="description">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        <div className="first-info-box">
          <div>
            <p className="info-title">Time Per Question</p>
            <p className="info-value">30 seconds</p>
          </div>

          <div>
            <p className="info-title">Total Questions</p>
            <p className="info-value">10</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            onClick={() => setIsQuizStarted(true)}
            variant="contained"
            className="start-button"
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default First;
