import { useLayoutEffect, useRef, useState } from 'react';

export default function useNow(updateInterval, enabled, cb) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  const [now, setNow] = useState(Date.now());
  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    setNow(Date.now());
    const interval = setInterval(() => {
      setNow(Date.now());
    }, updateInterval);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enabled]);
  return now;
}
