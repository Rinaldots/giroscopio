import { NextResponse, NextRequest } from "next/server";

let gyroDataMap = new Map();

/* 
{
    id : Number,
    gyroData : dados do giroscopio    
}
*/

export async function GET(req){

    const id = req.nextUrl.searchParams.get("id");

    let response = "nao tem id";

    if(id != undefined && gyroDataMap.get(toString(id)) != undefined){

        response = gyroDataMap.get(toString(id));

    }

    return NextResponse.json(gyroDataMap);

}

export async function POST(req){

    const data = await req.json();

    gyroDataMap.set(toString(req.id), req.gyroData);

    return NextResponse.json(data);
}