import { NextResponse} from "next/server";

let gyroDataMap = [];

/* 
{
    id : Number,
    gyroData : dados do giroscopio    
}
*/

export async function GET(req){

    const id = req.nextUrl.searchParams.get("id");

    let response = "nao tem id";

    if(id != undefined && gyroDataMap[id] != undefined){

        response = gyroDataMap[id];

    }

    return NextResponse.json(response);

}

export async function POST(req){

    const data = await req.json();

    gyroDataMap[data.id] = data.gyroData;

    return NextResponse.json(gyroDataMap);
}