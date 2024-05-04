"use client"

import { useEffect, useState } from 'react';

function GyroscopeComponent() {

  const [gyroscopeData, setGyroscopeData] = useState({ x: null, y: null, z: null });

  const [ atData, setAtData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      };
    } else {
      console.log('Gyroscope not supported');
    }
  }, []);

  const handleChange = () => {

    if(gyroscopeData.x - atData.x > 5 || gyroscopeData.x - atData.x < -5){
      setAtData(atData);
    }else if(gyroscopeData.y - atData.y > 5 || gyroscopeData.y - atData.y < -5){
      setAtData(atData);
    }else if(gyroscopeData.z - atData.z > 5 || gyroscopeData.z - atData.z < -5){
      setAtData(atData);
    }

  }

  const handleOrientation = (event) => {
    setGyroscopeData({
      x: event.beta,
      y: event.gamma,
      z: event.alpha
    });

    handleChange();
  };

  return (
    <div>
      <h2>Gyroscope Data:</h2>
      <p>X: {atData.x}</p>
      <p>Y: {atData.y}</p>
      <p>Z: {atData.z}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Next.js Gyroscope Example</h1>
      <GyroscopeComponent />
    </div>
  );
}