// Fetches the location data from the NASA API
async function getLocationData() {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
  const data = await res.json();
  console.log('Location data:', data);
  return data;
}

// Formats the location data and returns a JSON object
function formatLocationData(picture) {
  const { date, explanation, hdurl, title } = picture || {};
  console.log('what is the date',date);
  return {
    date,
    explanation,
    hdurl,
    title,
  };
}

// API endpoint function
export default async function location(req, res) {
  try {
    const picture = await getLocationData();
    console.log('Picture', picture);

    const formattedData = formatLocationData(picture);
    console.log('wtf',formattedData);
    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Automatically run the getLocationData function when this module is imported
(async () => {
  try {
    const picture = await getLocationData();
    console.log('Pictures:', picture);

    const formattedData = formatLocationData(picture);

    // Export the formatted data
    module.exports.data = formattedData;
  } catch (error) {
    console.error('Error fetching location data:', error);
  }
})();