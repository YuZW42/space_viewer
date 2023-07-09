import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        // Extract query parameter from request
        console.log('show')
        const {searchParams} = new URL(request.url);
        const id = searchParams.get('id');
        console.log('id: ', id);
        
        // Fetch data from NASA API
        const res = await fetch(`https://images-api.nasa.gov/search?q=${id}`);
        const data = await res.json();

        // Return data to client using NextResponse
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.error("Failed to fetch NASA API images", { status: 500 });
    }
}