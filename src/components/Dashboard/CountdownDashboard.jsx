import { useState, useEffect } from 'react';
import './CountdownDashboard.css';

const CountdownDashboard = () => {
  const marriageDate = new Date('2025-02-24T15:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = marriageDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2>Countdown to the Big Day!</h2>
      <div className="countdown">
        <div className="time-box">
          <h3>{timeLeft.days || '0'}</h3>
          <span>Days</span>
        </div>
        <div className="time-box">
          <h3>{timeLeft.hours || '0'}</h3>
          <span>Hours</span>
        </div>
        <div className="time-box">
          <h3>{timeLeft.minutes || '0'}</h3>
          <span>Minutes</span>
        </div>
        <div className="time-box">
          <h3>{timeLeft.seconds || '0'}</h3>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownDashboard;
