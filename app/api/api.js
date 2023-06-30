export async function getLocationData() {
  const res = await fetch('/api/day.jsx');
  const data = await res.json();
  console.log("----------------------data: ", data);
  return data;
}