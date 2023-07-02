
import React from 'react'
import Link from 'next/link';
async function getLocation(){
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`,{ cache: 'no-store' });
  const data = await res.json();

  return data as any[];
 
}
export default async function location(){
  const picture = await getLocation();
  
  return(
    <div>
      <p><Location picture={picture}/></p>
    </div>
  )
}

function Location({picture}:any ){
  const{date, explanation, hdurl,title} = picture||{}
  return (
    
    <div>
      <h4>{date}</h4>
      <p>{explanation}</p>
      <img src={hdurl} alt={title} style={{width: 800}} />
    </div>
    
  )
}