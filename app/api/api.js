
import location from './day.jsx';
export async function getLocationsData() {
  const res = await(location());
  const data = await res.json();
  console.log("----------------------data: ", data);
  return data;
}