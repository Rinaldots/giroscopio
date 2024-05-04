import { NextResponse, NextRequest } from "next/server";

let gyroData = {
    x : 0,
    y : 0,
    z : 0
}

let gyroDataMap = {}

/* 
{
    id : Number,
    gyroData : dados do giroscopio    
}
*/

export async function GET(req){

    const id = req.nextUrl.searchParams.get("id");

    let response = id ? id : undefined;

    if(id && gyroDataMap[id]){

        response = gyroDataMap[id];

    }

    return NextResponse.json(response);

}

export async function POST(req){

    const data = await req.json();

    gyroDataMap[data.id] = data.gyroData;

    return NextResponse.json(data);
}