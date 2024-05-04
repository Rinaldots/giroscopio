import { NextResponse } from "next/server";

let gyroData = {
    x : 0,
    y : 0,
    z : 0
}

export async function GET(){
    return NextResponse.json(gyroData);
}

export async function POST(req){

    const data = await req.json();

    gyroData = data;

    return NextResponse.json(data);
}