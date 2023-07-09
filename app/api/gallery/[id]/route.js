import { NextResponse } from "next/server"

async function fetchFeed(){
    const response = await fetch('')
}

export const GET = async (request, { params }) => {
    try {
        const res = await fetch("https://images-api.nasa.gov/search?q=" + params.id)
        data = await res.json()
        console.log(data)

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch NASA API images", { status: 500 })
    }
}