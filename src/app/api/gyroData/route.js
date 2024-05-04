import { NextResponse } from "next/server";

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

export async function GET(params){

    const data = await params.json();

    return NextResponse.json(gyroDataMap[data.id]);

}

export async function POST(req){

    const data = await req.json();

    gyroDataMap[data.id] = data.gyroData;

    return NextResponse.json(data);
}