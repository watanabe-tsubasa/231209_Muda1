import { useState, useEffect } from 'react';

interface MotionData {
  acceleration: DeviceMotionEvent['acceleration'];
  accelerationIncludingGravity: DeviceMotionEvent['accelerationIncludingGravity'];
  rotationRate: DeviceMotionEvent['rotationRate'];
  interval: DeviceMotionEvent['interval'];
}

export const useDeviceMotion = () => {
  const [motionData, setMotionData] = useState<MotionData>({
    acceleration: { x: null, y: null, z: null },
    accelerationIncludingGravity: { x: null, y: null, z: null },
    rotationRate: { alpha: null, beta: null, gamma: null },
    interval: 0,
  });

  useEffect(() => {
    const handleMotionEvent = (event: DeviceMotionEvent) => {
      setMotionData({
        acceleration: event.acceleration,
        accelerationIncludingGravity: event.accelerationIncludingGravity,
        rotationRate: event.rotationRate,
        interval: event.interval,
      });
    };

    window.addEventListener('devicemotion', handleMotionEvent);

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  return motionData;
};
