import { NextResponse} from "next/server";

let gyroDataMap = [];

export async function GET(req){

    const id = req.nextUrl.searchParams.get("id");

    let response = {x : 0, y : 0, z : 0};

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
