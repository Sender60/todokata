import React, { useState, useEffect } from 'react';
import useNow from '../hooks/useNow';

const Timer = ({ minutes, seconds }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [startAt, setStartAt] = useState();
  const [initialTimer, setInitialTimer] = useState(0);

  const now = useNow(100, startAt);
  const timeFromStart = now - (startAt || now);
  const timer = timeFromStart + initialTimer;
  const countDown = minutes * 60 * 1000 + seconds * 1000 - timer;
  const isCountEnd = countDown <= 0;

  const toggleTimer = () => {
    if (startAt) {
      setInitialTimer(timer);
      setStartAt();
    } else {
      setStartAt(Date.now());
    }
  };

  useEffect(() => {
    if (isCountEnd) {
      setIsPaused(true);
      toggleTimer();
    }
  }, [isCountEnd]);

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
    toggleTimer();
  };

  const minutesTimer = isCountEnd ? 0 : Math.floor(countDown / (60 * 1000));
  const secondsTimer = isCountEnd ? 0 : Math.floor((countDown % (60 * 1000)) / 1000);

  return (
    <span className="description">
      {isPaused && (
        <button
          type="button"
          className="icon icon-play"
          aria-label="play"
          onClick={handlePausePlay}
          disabled={countDown <= 0}
        />
      )}
      {!isPaused && <button type="button" className="icon icon-pause" aria-label="pause" onClick={handlePausePlay} />}
      {`${minutesTimer}:${secondsTimer.toString().padStart(2, '0')}`}
    </span>
  );
};

export default Timer;
