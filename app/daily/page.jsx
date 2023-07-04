"use client";

import { useEffect, useState } from 'react';

const Daily = () => {
    const [dailyData, setDailyData] = useState([]);

    const fetchDailyPic = async () => {
        
        const response = await fetch('/api/daily');
        const  responseData = await response.json();

        setDailyData(responseData);
    }

    useEffect(() => {
        fetchDailyPic();
    }, []);


    // Render the location data
    return (
        <div>
            {dailyData ? (
                <div>
                    <h1>Welcome to the Picture of the Day</h1>
                    <h4>{dailyData.date}</h4>
                    <h4>{dailyData.explanation}</h4>
                    <img src={dailyData.hdurl} alt="NASA Picture of the Day" style={{ width: 800 }} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Daily