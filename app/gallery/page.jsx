'use client';
import { useState, useEffect } from 'react';

import Card from '../../components/Card';
import Card_Feed from '../../components/Card_Feed';

const page = () => {
  const fetchDailyPic = async (date) => {
    const response = await fetch(`/api/daily?date=${date}`);
    const responseData = await response.json();
    setDailyData(responseData);
  };
  
  return (
    <div>
        <h1>Welcome to the Gallery</h1>
        <Card_Feed />
    </div>
  )
}

export default page