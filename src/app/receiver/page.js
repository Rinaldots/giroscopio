"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function page(){

    const [ gyroData, setGyroData] = useState({x : null, y : null, z : null});

    useEffect(() => {

        const refreshData = setInterval(() => {
            axios.get("/api/gyroData")
            .then((response) => {
                setGyroData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        })

    },[])

    return(
        <div>
            <h1>Data</h1>
            <h1>X : {gyroData.x}</h1>
            <h1>Y : {gyroData.y}</h1>
            <h1>Z : {gyroData.z}</h1>
        </div>
    )

}

export default page;