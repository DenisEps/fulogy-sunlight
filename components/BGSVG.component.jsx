import { useState, useEffect } from 'react';
import styles from '../styles/BGSVG.module.css';

export default function BackgroundSvg() {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }

  return (
    <div className={styles.root}>
      <svg
        width="100vw"
        viewBox="0 0 1481 1400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {size && size.width > '500' ? (
          <path
            d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z"
            fill="url(#paint0_linear)"
          />
        ) : (
          <path
            d="M0+0L1481+0L1481+938.171C1114.99-76.8446+367.553+1266.44+0+802.378L0+0Z"
            fill="url(#paint0_linear)"
          />
        )}

        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1481"
            y1="235.001"
            x2="-15.6763"
            y2="235.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2196F3" />
            <stop offset="1" stopColor="#1EC3AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
