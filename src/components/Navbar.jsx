import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isResultsPage, resetQuizState }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (typeof resetQuizState === 'function') {
      resetQuizState();
    }
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        boxShadow: '0px 5px 36px rgba(0,0,0,0.08)',
        width: '100vw',
        position: 'absolute',
        top: 0,
        padding: '0 16px',
      }}
    >
      <div style={{ width: '40px' }}>
        {isResultsPage && (
          <ArrowBackIcon
            onClick={handleBackClick}
            style={{
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          />
        )}
      </div>

      <div style={{ textAlign: 'center', flexGrow: 1 }}>
        <p style={{ fontWeight: '500', fontSize: '18px', margin: 0 }}>
          Sentence Construction
        </p>
      </div>

      <div style={{ width: '40px' }} />
    </div>
  );
};

export default Navbar;
