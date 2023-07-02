"use client"

import {getLocationsData}  from '../api/api.js'; 

import React from 'react';
import { useEffect, useState } from 'react';

const Daily = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getLocationsData();
                setLocation(data);
                console.log("data", data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);


    // Render the location data
    return (
        <div>
            {location ? (
                <div>
                    <div>Welcome to the Picture of the Day</div>
                    <h4>{location.date}</h4>
                    <h4>{location.explanation}</h4>
                    <img src={location.hdurl} alt="NASA Picture of the Day" style={{ width: 800 }} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Daily