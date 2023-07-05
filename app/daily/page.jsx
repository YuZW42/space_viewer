"use client";
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

const Daily = () => {
  const [dailyData, setDailyData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const fetchDailyPic = async (date) => {
    const response = await fetch(`/api/daily?date=${date}`);
    const responseData = await response.json();
    setDailyData(responseData);
  };

  const formatDateFn = (date) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      return formattedDate;
    }
    return '';
  };

  useEffect(() => {
    fetchDailyPic(selectedDate);
  }, [selectedDate]);
  useEffect(() => {
    fetchDailyPic('');
  }, []);

  // Render the location data
  return (
    <div>
      <DatePicker
        selected={selectedDate ? parseISO(selectedDate) : null}
        onChange={(date) => setSelectedDate(formatDateFn(date))}
        dateFormat="yyyy-MM-dd"
        maxDate={new Date()}
      />

      {dailyData ? (
        <div>
          <div>Welcome to the Picture of the Day</div>
          <h4>{dailyData.date}</h4>
          <h4>{dailyData.explanation}</h4>
          <img
            src={dailyData.hdurl}
            alt="NASA Picture of the Day"
            style={{ width: 800 }}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Daily;