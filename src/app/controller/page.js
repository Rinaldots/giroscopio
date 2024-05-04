"use client"

import React, { useState, useEffect } from "react";

function Page() {

    const [ gyroData, setGyroData] = useState({x : null, y : null, z: null});

    const [ gyroCleanData, setGyroCleanData] = useState({x : 0, y : 0, z: 0});

    useEffect(() => {

        const handleOrientation = (event) => {
            const newGyroData = {
                x: event.beta,
                y: event.gamma,
                z: event.alpha
            }

            setGyroData(newGyroData);

            if(gyroData.x - gyroCleanData.x > 5 || gyroData.x - gyroCleanData < -5 ){
                setGyroCleanData(newGyroData);
            }

        }

        if(window.DeviceOrientationEvent){

            window.addEventListener('deviceorientation', handleOrientation);

            return () => {
                window.removeEventListener('deviceorientation', handleOrientation);
            };

        }

    }, [gyroData]); // Re-run effect only when windowSize changes

    return (
        <div>
            <h1>----</h1>
            <h1>{gyroData.x}</h1>
            <h1>{gyroData.y}</h1>
            <h1>{gyroData.z}</h1>
            <h1>---</h1>
            <h1>{gyroCleanData.x}</h1>
            <h1>{gyroCleanData.y}</h1>
            <h1>{gyroCleanData.z}</h1>
        </div>
    );
}

export default Page;