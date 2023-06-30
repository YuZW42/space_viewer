import React from 'react'

async function getLocation(){
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
}
export default async function location(){
  return(
    <div>
      <h1>notes</h1>
    </div>
  )
}