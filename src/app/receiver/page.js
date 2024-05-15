
"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Page({params}) {
    const router = useRouter();

    useEffect(() => {
    axios.get("/api/idList").then((response) => {
            let id = 0
            for (let i = 0; i < response.data.length; i++){
            id = Math.random() * 1000;
            if(!response.data.includes(id)){
                break;
            }
        }        
        router.push(`/receiver/${id}`);
    })
    }, [])

    return (
        <div>
            <h1>Page {params.pageId}</h1>
        </div>
    )

}
export default Page;