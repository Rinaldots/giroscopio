"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

function Page({params}) {

    const [ gyroData, setGyroData] = useState({x : null, y : null, z: null});

    const [ gyroCleanData, setGyroCleanData] = useState({x : 0, y : 0, z: 0});

    useEffect(() => {

        const handleOrientation = (event) => {
            let newGyroData = {
                x: event.beta,
                y: event.gamma,
                z: event.alpha
            }

            setGyroData(newGyroData);

            newGyroData = {
                x : parseInt(newGyroData.x),
                y : parseInt(newGyroData.y),
                z : parseInt(newGyroData.z)
            }

            const handlePut = () => {
                axios.post("/api/gyroData", {
                    "id" : params.pageId,
                    "gyroData" : newGyroData
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            }

            if(gyroData.x - gyroCleanData.x > 5 || gyroData.x - gyroCleanData.x < -5 ){

                setGyroCleanData(newGyroData);
                handlePut();

            }else if(gyroData.y - gyroCleanData.y > 5 || gyroData.y - gyroCleanData.y < -5 ){

                setGyroCleanData(newGyroData);
                handlePut();

            }else if(gyroData.z - gyroCleanData.z > 5 || gyroData.z - gyroCleanData.z < -5 ){

                setGyroCleanData(newGyroData);
                handlePut();

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

            <h1>---</h1>
            <h1>X : {gyroCleanData.x}</h1>
            <h1>Y : {gyroCleanData.y}</h1>
            <h1>Z : {gyroCleanData.z}</h1>

        </div>
    );
}

export default Page;