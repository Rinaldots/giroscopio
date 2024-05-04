"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";


function page({params}){

    const [ gyroData, setGyroData] = useState({x : null, y : null, z : null});

    useEffect(() => {

        console.log(params);

        const refreshData = setInterval(() => {
            axios.get("/api/gyroData", {
                params : {
                    id : params.pageId,
                }
            })
            .then((response) => {
                setGyroData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, 500);

        return () => clearInterval(refreshData);

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