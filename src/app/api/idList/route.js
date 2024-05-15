import { NextResponse} from "next/server";

let clientId = [];



export async function GET(){

    return NextResponse.json(clientId);

}

export async function POST(req){

    const newId = await req.json();
        if(!clientId.includes(newId.id)){
            clientId.push(newId.id);
        }    
    return NextResponse.json(clientId);
}