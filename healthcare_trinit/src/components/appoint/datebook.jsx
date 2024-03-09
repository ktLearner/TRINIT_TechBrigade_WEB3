// CalendarBooking.js
/*import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalendarBooking = () => {
  const { department } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  // Dummy data for the calendar slots
  const calendarData = [
    { date: '2024-03-15', status: 'available' },
    { date: '2024-03-16', status: 'full' },
    { date: '2024-03-17', status: 'holiday' },
    // Add more dates and statuses as needed
  ];
/*
  const handleDateClick = (date, status) => {
    if (status === 'available') {
      // Display a confirmation popup using react-toastify
      toast.info(
        <div>
          <p>{`Hospital: Mercy General Hospital`}</p>
          <p>{`Department: ${department}`}</p>
          <p>{`Date: ${date}`}</p>
          <button
            onClick={() => {
              // Handle booking confirmation logic here
              toast.success('Booking confirmed!');
              // You can add additional logic here, such as API calls for booking confirmation
              // Close the toast popup after confirmation
              toast.dismiss();
            }}
          >
            Confirm Booking
          </button>
        </div>,
        {
          position: 'top-center',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          closeButton: false,
        }
      );
    } else if (status === 'full') {
      // Handle the case when all slots are full
      toast.error(`All slots are full for ${department} on ${date}`);
    } else if (status === 'holiday') {
      // Handle the case when the date is a holiday
      toast.warn(`Hospital closed on ${date}`);
    }
  };*/

  /*const handleDateClick = (date, status) => {
    if (status === 'available') {
      // Display a confirmation popup using react-toastify
      toast.info(
        <div>
          <p>{`Hospital: Mercy General Hospital`}</p>
          <p>{`Department: ${department}`}</p>
          <p>{`Date: ${date}`}</p>
          <button
            onClick={() => {
              // Handle booking confirmation logic here
              toast.success('Booking confirmed!');
              // You can add additional logic here, such as API calls for booking confirmation
              // Close the toast popup after confirmation
              toast.dismiss();
            }}
          >
            Confirm Booking
          </button>
        </div>,
        {
          position: 'top-center',
          autoClose: 8000, // Adjust the autoClose time as needed (e.g., 8000 milliseconds = 8 seconds)
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          closeButton: false,
        }
      );
    } else {
      // Display appropriate toast message for full or holiday slots
      const toastMessage =
        status === 'full'
          ? `All slots are full for ${department} on ${date}`
          : `Hospital closed on ${date}`;
  
      toast.error(toastMessage, {
        position: 'top-center',
        autoClose: 5000, // Adjust the autoClose time as needed (e.g., 5000 milliseconds = 5 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: true,
      });
    }
  };*/

  /*return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">{department} - Calendar Booking</h1>
      <Calendar
        onChange={(date) => setSelectedDate(date)}
        value={selectedDate}
        tileContent={({ date, view }) => {
          const currentDate = date.toISOString().split('T')[0];
          const status = calendarData.find((item) => item.date === currentDate)?.status || 'available';

          return (
            <div
              className={`calendar-tile ${
                status === 'available'
                  ? 'bg-green-300 cursor-pointer'
                  : status === 'full'
                  ? 'bg-red-300'
                  : 'bg-yellow-300'
              }`}
              onClick={() => handleDateClick(currentDate, status)}
            >
              {date.getDate()}
            </div>
          );
        }}
      />
      <Link to={`/physical-appointment/departments`} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Go Back
      </Link>
    </div>
  );
};

export default CalendarBooking;*/

// ... (previous imports)


import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalendarBooking = () => {
  const { department } = useParams();
  const currentDate = new Date(); // Get the current date
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [bookedDates, setBookedDates] = useState([]);

  // Dummy data for the calendar slots
  const calendarData = [
    { date: '2024-03-15', status: 'available' },
    { date: '2024-03-16', status: 'full' },
    { date: '2024-03-17', status: 'holiday' },
    // Add more dates and statuses as needed
  ];

  const handleDateClick = (date, status) => {
    if (status === 'available') {
      // Display a confirmation popup using react-toastify
      const confirmationToastId = toast.info(
        <div>
          <p className="text-black">{`Date: ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</p>
          <button
            onClick={() => {
              // Handle booking confirmation logic here
              setBookedDates([...bookedDates, date.toISOString().split('T')[0]]); // Add the booked date to the state
              toast.success('Booking confirmed!');
              // You can add additional logic here, such as API calls for booking confirmation
              // Dismiss the confirmation toast after booking is confirmed
              toast.dismiss(confirmationToastId);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Confirm Booking
          </button>
          <button
            onClick={() => {
              // Handle cancel booking logic here
              toast.dismiss(confirmationToastId);
              toast.success('Booking canceled!');
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cancel Booking
          </button>
        </div>,
        {
          position: 'bottom-left',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          closeButton: false,
        }
      );
    } else {
      // Display appropriate toast message for full or holiday slots
      const toastMessage =
        status === 'full'
          ? `All slots are full on ${date.toISOString().split('T')[0]}`
          : `Hospital closed on ${date.toISOString().split('T')[0]}`;

      toast.error(toastMessage, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: true,
      });
    }
  };

  const isDateBooked = (date) => bookedDates.includes(date.toISOString().split('T')[0]);

  const handleCancelBooking = () => {
    // Handle cancel booking logic here
    setBookedDates([]); // Clear booked dates
    toast.success('Booking canceled!');
  };

  return (
    <div className = "bg-[#1b263b] ">
    <div className="container mx-auto mt-8 text-black">
      <h1 className="text-2xl font-bold mb-4 text-white flex justify-center">{department} - Slot Booking</h1>
      <div className="flex justify-center mb-4">
        <div className="text-center">
          <button onClick={() => setSelectedDate(new Date())} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
            Today
          </button>
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
            navigationAriaLabel="Change month and year"
            prev2Label="««"
            prevLabel="«"
            nextLabel="»"
            next2Label="»»"
            className="mb-4"
            tileContent={({ date }) => {
              const currentDate = date.toISOString().split('T')[0];
              const status = calendarData.find((item) => item.date === currentDate)?.status || 'available';

              return (
                <div
                  className={`calendar-tile ${
                    status === 'available' ? (isDateBooked(date) ? 'bg-red-300 cursor-not-allowed' : 'bg-green-300 cursor-pointer') : status === 'full' ? 'bg-red-300' : 'bg-yellow-300'
                  }`}
                  onClick={() => handleDateClick(date, status)}
                >
                  {date.getDate()}
                </div>
              );
            }}
          />
         
        </div>
      </div>
    </div></div>
  );
};

export default CalendarBooking;
