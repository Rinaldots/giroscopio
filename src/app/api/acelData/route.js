import { NextResponse} from "next/server";

let acelDataMap = {x : 0, y : 0, z : 0};

/* 
{
    id : Number,
    gyroData : dados do giroscopio    
}
*/

export async function GET(){

    return NextResponse.json(acelDataMap);

}

export async function POST(req){

    const data = await req.json();

    acelDataMap = data.gyroData;

    return NextResponse.json(acelDataMap);
}