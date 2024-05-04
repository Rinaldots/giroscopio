import { NextResponse } from "next/server";

let teste = 0;

export async function GET(){
    return NextResponse.json({teste : teste});
}

export async function POST(){

    teste = 1;

    return NextResponse.json({teste : teste});
}