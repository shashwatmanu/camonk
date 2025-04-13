import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isResultsPage, resetQuizState }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (typeof resetQuizState === 'function') {
      resetQuizState();
    }
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <div className="navbar-icon-wrapper">
        {isResultsPage && (
          <ArrowBackIcon
            onClick={handleBackClick}
            className="navbar-back-icon"
          />
        )}
      </div>

      <div className="navbar-title">
        <p>Sentence Construction</p>
      </div>

      <div className="navbar-icon-placeholder" />
    </div>
  );
};

export default Navbar;
