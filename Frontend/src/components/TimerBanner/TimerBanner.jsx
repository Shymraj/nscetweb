import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TimerBanner.css';

const TimerBanner = () => {
  const [timerData, setTimerData] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/home/timer');
        if (response.data && response.data.data && response.data.data.length > 0) {
          // Just take the first timer
          setTimerData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching timer data:", error);
      }
    };
    fetchTimer();
  }, []);

  useEffect(() => {
    if (!timerData || !timerData.target_date) return;

    const targetDate = new Date(timerData.target_date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerData]);

  if (!timerData) return null;

  return (
    <div className="timer-banner-container">
      <div className="timer-banner-content">
        <h2 className="timer-event-name">{timerData.event_name}</h2>
        <div className="timer-countdown">
          <div className="time-box">
            <span className="time-value">{timeLeft.days}</span>
            <span className="time-label">Days</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerBanner;
