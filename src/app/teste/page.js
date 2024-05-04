"use client"

import React, { useEffect } from "react";

function page(){

    useEffect(() => {

        const interval = setInterval(() => {
            console.log("100");
        }, 1000);

        return () => clearInterval(interval);

    },[])

    return(
        <div>

        </div>
    )

}

export default page;