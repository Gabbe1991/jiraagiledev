import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useForm } from 'react-hook-form';
import 'react-calendar/dist/Calendar.css';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const onSubmit = (data) => {
    console.log(data);
    // funktion för att spara bokningsinformationen på servern och skicka en bekräftelse till användaren
  };

  const times = ['10:00', '12:00', '14:00', '16:00'];

  return (
    <div>
      <h1>Booking Page</h1>
      <h2>Select Date:</h2>
      <Calendar onChange={handleDateSelection} value={selectedDate} />
      <h2>Select Time:</h2>
      <div>
        {times.map((time) => (
          <button
            key={time}
            disabled={selectedDate === null}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <h2>Booking Information:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selectedDate && (
          <p>Selected Date: {selectedDate.toLocaleDateString('en-US')}</p>
        )}
        {selectedTime && <p>Selected Time: {selectedTime}</p>}
        <label htmlFor="name">Name:</label>
        <input {...register('name', { required: 'Name is required' })} />
        <label htmlFor="email">Email:</label>
        <input {...register('email', { required: 'Email is required' })} />
        <button type="submit" disabled={!selectedDate || !selectedTime}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
