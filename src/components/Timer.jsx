import React, { useEffect, useState } from 'react';

const Timer = ({ duration = 30, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div style={{ fontSize: '24px', fontWeight: '600', color:'rgba(97, 100, 100, 1)' }}>
      0:{(timeLeft>=10)?timeLeft:`0${timeLeft}`}
    </div>
  );
};

export default Timer;
