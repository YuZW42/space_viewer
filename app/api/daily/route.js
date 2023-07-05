// Fetches the location data from the NASA API
async function getData(date) {
    try{
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&&date=${date}`, { cache: 'no-store' });
        const data = await res.json();
        console.log('show',data)
        return data;
    } catch (error) {
        return error;
    }
  }
  
// Formats the location data and returns a JSON object
function formatData(data) {
    const { date, explanation, hdurl, title } = data || {};
    return {
        date,
        explanation,
        hdurl,
        title,
    };
}

// Export data from API endpoint
export const GET = async (request) => {
    try{
        const{searchParams} = new URL(request.url);
        const date = searchParams.get('date');
        
        const data = await getData(date);
        const formattedData = formatData(data);
        console.log('hey',formattedData);
        return new Response(JSON.stringify(formattedData), {status: 200})
    } catch (error) {
        return new Response(error, {status: 500})
    }
}