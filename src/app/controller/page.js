"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

function Page() {

    const [ gyroData, setGyroData] = useState({x : null, y : null, z: null});

    const [ gyroCleanData, setGyroCleanData] = useState({x : 0, y : 0, z: 0});

    const [ subir, setSubir] = useState(null);

    const handleTeste = () => {
        axios.get("/api/teste")
        .then((response) => {
            setSubir(response.data.teste);
        });
    }

    const handleSubir = () => {
        axios.post("/api/teste")
        .then((response) => {
            console.log(response);
        });

    }

    useEffect(() => {

        const handleOrientation = (event) => {
            const newGyroData = {
                x: event.beta,
                y: event.gamma,
                z: event.alpha
            }

            setGyroData(newGyroData);

            if(gyroData.x - gyroCleanData.x > 5 || gyroData.x - gyroCleanData.x < -5 ){

                setGyroCleanData(
                    {
                        x : parseInt(newGyroData.x),
                        y : parseInt(newGyroData.y),
                        z : parseInt(newGyroData.z)
                    }
                );

            }else if(gyroData.y - gyroCleanData.y > 5 || gyroData.y - gyroCleanData.y < -5 ){

                setGyroCleanData(
                    {
                        x : parseInt(newGyroData.x),
                        y : parseInt(newGyroData.y),
                        z : parseInt(newGyroData.z)
                    }
                );

            }else if(gyroData.z - gyroCleanData.z > 5 || gyroData.z - gyroCleanData.z < -5 ){

                setGyroCleanData(
                    {
                        x : parseInt(newGyroData.x),
                        y : parseInt(newGyroData.y),
                        z : parseInt(newGyroData.z)
                    }
                );

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
            <h1>X : {gyroData.x}</h1>
            <h1>Y : {gyroData.y}</h1>
            <h1>Z : {gyroData.z}</h1>

            <h1>---</h1>
            <h1>X : {gyroCleanData.x}</h1>
            <h1>Y : {gyroCleanData.y}</h1>
            <h1>Z : {gyroCleanData.z}</h1>

            <button
                onClick={() => handleTeste()}
            >TESTE</button>
            <h1>{subir}</h1>

            <button
                onClick={() => handleSubir()}
            >
                subir
            </button>
        </div>
    );
}

export default Page;