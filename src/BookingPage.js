import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useForm } from 'react-hook-form';
import 'react-calendar/dist/Calendar.css';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);
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
    const bookingInfo = {
      ...data,
      date: selectedDate.toLocaleDateString('en-US'),
      time: selectedTime,
    };
    setBookings([...bookings, bookingInfo]);
  };

  const times = ['10:00', '12:00', '14:00', '16:00'];

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: '16px',
    width: '100%',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8px',
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <div style={sectionStyle}>
        <div style={rowStyle}>
          <h2 style={{ marginRight: '8px' }}>Select Date:</h2>
          <Calendar onChange={handleDateSelection} value={selectedDate} />
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={rowStyle}>
          <h2 style={{ marginRight: '8px' }}>Select Time:</h2>
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
        </div>
      </div>
      <div style={sectionStyle}>
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
      <div style={sectionStyle}>
        <h2>Bookings:</h2>
        {bookings.map((booking, index) => (
          <div key={index}>
            <p>
              {booking.name}, {booking.email} - {booking.date}, {booking.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
