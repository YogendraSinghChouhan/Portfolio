import React from 'react';
import PixelBlast from './bg';

const PixelBlastBackground: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
  pointerEvents: 'none',
  opacity: 0.25,
    }}
    aria-hidden="true"
  >
    <PixelBlast
      variant="circle"
      pixelSize={6}
      color="#B19EEF"
      patternScale={3}
      patternDensity={1.2}
      pixelSizeJitter={0.5}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.5}
      liquid
      liquidStrength={0.12}
      liquidRadius={1.2}
      liquidWobbleSpeed={5}
      speed={0.6}
      edgeFade={0.25}
      transparent
    />
  </div>
);

export default PixelBlastBackground;
