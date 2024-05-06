"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

function Page({params}) {

    const [ gyroData, setGyroData] = useState({x : null, y : null, z: null});

    const [ gyroCleanData, setGyroCleanData] = useState({x : 0, y : 0, z: 0});

    const [ joyStickContainerSize, setJoyStickContainerSize] = useState({x : 0, y : 0});

    const [ windowSize, setWindowSize] = useState({x : 0, y : 0});

    useEffect(() => {

        const joyStick = document.getElementById("joyStickContainer");

        setJoyStickContainerSize(
            {
                x : joyStick.offsetWidth,
                y : joyStick.offsetHeight
            }
        )

        setWindowSize(
            {
                x : window.innerWidth,
                y : window.innerHeight
            }
        )

    }, [])

    useEffect(() => {

        const handleOrientation = (event) => {
            let newGyroData = {
                x: event.gamma,
                y: event.beta * -1,
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
        <div className="h-screen w-full flex justify-center items-center bg-black">

            <div className={`${windowSize.x > windowSize.y? "w-auto h-full" : "w-full h-auto"} aspect-square bg-black relative`}>

                    <div className="text-white m-4">
                        <h1>X : {gyroCleanData.x}</h1>
                        <h1>Y : {gyroCleanData.y}</h1>
                        <h1>Z : {gyroCleanData.z}</h1>
                    </div>

                <div 
                    className={`w-[80%] h-auto aspect-square rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border border-white`}
                    id="joyStickContainer"
                >

                    <div className="w-1/2 h-auto aspect-square rounded-full absolute left-1/4 top-1/4 z-10 border border-white border-dashed"/>

                    <div 
                        className="w-1 h-full bg-black absolute left-1/2 -translate-x-1/2"
                        style={{transform : `translateX(-50%) rotate(${Math.atan2((joyStickContainerSize.x / 2) * (gyroCleanData.x / 160), (joyStickContainerSize.y / 2) * (gyroCleanData.y / 160)) * 180 / Math.PI}deg)`}}
                    >
                        <div className="w-full h-1/2 bg-white"/>
                    </div>

                    <div 
                        className={`w-4 h-4 bg-white absolute rounded-full top-1/2 left-1/2 z-10`}
                        style={{transform : `translateX(${(joyStickContainerSize.x / 2) * (gyroCleanData.x / 160) - 8}px)
                        translateY(${((joyStickContainerSize.y / 2) * -1) * (gyroCleanData.y / 160) - 8}px)`}}
                    />

                    <div
                        className="w-2 h-2 bg-red-600 absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />

                </div>

            </div>

        </div>

    );
}

export default Page;