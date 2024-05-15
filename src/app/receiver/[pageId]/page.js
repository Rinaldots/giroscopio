"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";


function page({params}){

    const [ gyroData, setGyroData] = useState({x : null, y : null, z : null, id : null});

    useEffect(() => {

        console.log(params);

        const refreshIp = setInterval(() => {
            axios.get("/api/idList").then((response) => {
            
                    axios.post("/api/idList", {
                        "id" : params.pageId,
                      })
                })
                }, 2000);

        const refreshData = setInterval(() => {
            
            axios.get("/api/gyroData", {
                params : {
                    id : params.pageId,
                }
            })
            .then((response) => {
                setGyroData(response.data);
                
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
            <h1>ID: {gyroData.id}</h1>
        </div>
    )

}

export default page;