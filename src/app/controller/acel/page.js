"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

function Page({params}) {

    const [ acelData, setAcelData] = useState({x : null, y : null, z: null});

    const [ acelCleanData, setAcelCleanData] = useState({x : 0, y : 0, z: 0});

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
            let newAcelData = {
                x: event.acceleration.x,
                y: event.acceleration.y,
                z: event.acceleration.z
            }

            setAcelData(newAcelData);

            newAcelData = {
                x : parseInt(newAcelData.x),
                y : parseInt(newAcelData.y),
                z : parseInt(newAcelData.z)
            }

            const handlePut = () => {
                axios.post("/api/acelData", {
                    "id" : params.pageId,
                    "acelData" : newAcelData
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            }

            if(acelData.x - acelCleanData.x > 5 || acelData.x - acelCleanData.x < -5 ){

                setAcelCleanData(newAcelData);
                handlePut();

            }else if(acelData.y - acelCleanData.y > 5 || acelData.y - acelCleanData.y < -5 ){

                setAcelCleanData(newAcelData);
                handlePut();

            }else if(acelData.z - acelCleanData.z > 5 || acelData.z - acelCleanData.z < -5 ){

                setAcelCleanData(newAcelData);
                handlePut();

            }

        }

        if(window.DeviceMotionEvent){

            window.addEventListener('deviceorientation', handleOrientation);

            return () => {
                window.removeEventListener('deviceorientation', handleOrientation);
            };

        }


    }, [acelData]); // Re-run effect only when windowSize changes

    return (
        <div className="h-screen w-full flex justify-center items-center bg-black">

            <div className={`${windowSize.x > windowSize.y? "w-auto h-full" : "w-full h-auto"} aspect-square bg-black relative`}>
        
                <h1 className="text-white">
                    Teste
                </h1>

                    <div className="text-white m-4">
                        <h1>X : {acelCleanData.x}</h1>
                        <h1>Y : {acelCleanData.y}</h1>
                        <h1>Z : {acelCleanData.z}</h1>
                    </div>

                <div 
                    className={`w-[80%] h-auto aspect-square rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border border-white`}
                    id="joyStickContainer"
                >

                    <div className="w-1/4 h-auto aspect-square rounded-full absolute left-1/2 top-1/2 z-10 border border-white border-dashed -translate-y-1/2 -translate-x-1/2"/>

                    <div className="w-1/2 h-auto aspect-square rounded-full absolute left-1/4 top-1/4 z-10 border border-white"/>

                    <div className="w-3/4 h-auto aspect-square rounded-full absolute left-1/2 top-1/2 z-10 border border-white border-dashed -translate-y-1/2 -translate-x-1/2"/>

                    <div className="h-full w-[1px] bg-white absolute left-1/2 z-10 -translate-x-1/2"/>

                    <div className="w-full h-[1px] bg-white absolute top-1/2 left-1/2 z-10 -translate-x-1/2"/>

                    <div 
                        className="w-[1px] h-full bg-black absolute left-1/2 -translate-x-1/2"
                        style={{
                            transform : `translateX(-50%) rotate(${Math.atan2((joyStickContainerSize.x / 2) * (acelCleanData.x / 160), 
                            (joyStickContainerSize.y / 2) * (acelCleanData.y / 160)) * 180 / Math.PI}deg)`,
                        }}
                    >
                        <div 
                            className="w-full h-1/2 border-l-[1px] border-red-600"
                        />
                    </div>

                    <div 
                        className={`w-4 h-4 bg-white absolute rounded-full top-1/2 left-1/2 z-10`}
                        style={{transform : `translateX(${(joyStickContainerSize.x / 2) * (acelCleanData.x / 160) - 8}px)
                        translateY(${((joyStickContainerSize.y / 2) * -1) * (acelCleanData.y / 160) - 8}px)`}}
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