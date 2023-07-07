'use client'
 
import Link from "next/link"
import {useState} from "react"

export default function SearchGallary(){
  const [query, setQuery] = useState('')
  const handleSumbit = async (e) => {
    e.preventdefault()
    const response = await fetch(`/api/Gallery`)
    const data = await response.json();

  }
  return(

    <div> 
      <form  onSumbit={handleSumbit}>
        <input type="text" placeholder="Search " value={query} coChange={(e) =>setQuery(e.target.value)}></input>
        <button type="submit" >Search</button>
      </form>
      
    </div>
  )
}