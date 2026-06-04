import { NextResponse } from "next/server"

export const GET = async () => {
    const resp = await fetch("https://dummyjson.com/todos");
    const {todos} = await resp.json()
    
    return NextResponse.json({todos}, {status: 200})
}