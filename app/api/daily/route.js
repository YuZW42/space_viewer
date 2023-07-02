// Fetches the location data from the NASA API
async function getData() {
    try{
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
        const data = await res.json();
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
        const data = await getData();
        const formattedData = formatData(data);
        return new Response(JSON.stringify(formattedData), {status: 200})
    } catch (error) {
        return new Response(error, {status: 500})
    }
}