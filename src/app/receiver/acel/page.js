"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function page({params}){

    const [ acelData, setAcelData] = useState({x : null, y : null, z : null});

    useEffect(() => {

        console.log(params);

        const refreshData = setInterval(() => {
            axios.get("/api/acelData")
            .then((response) => {
                setAcelData(response.data);
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
            <h1>X : {acelData.x}</h1>
            <h1>Y : {acelData.y}</h1>
            <h1>Z : {acelData.z}</h1>
        </div>
    )

}

export default page;