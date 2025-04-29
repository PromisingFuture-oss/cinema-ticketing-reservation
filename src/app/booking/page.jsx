'use client'
import React, { useState, useEffect } from 'react';

const BookingPage = () => {
  const [movie, setMovie] = useState('');
  const [moviePrice, setMoviePrice] = useState(300);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]); // State to track booked seats
  const [date, setDate] = useState('');
  const [time, setTime] = useState('3:00 PM');
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [showModal, setShowModal] = useState(false);
  const [serialNumber, setSerialNumber] = useState('');

  const rows = 6;
  const cols = 10;

  // Simulate fetching booked seats based on the selected movie
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedMovie = urlParams.get('movie') || 'Select a movie';
    const selectedPrice = parseFloat(urlParams.get('price')) || 300;

    setMovie(selectedMovie);
    setMoviePrice(selectedPrice);

    // Simulate fetching booked seats for the selected movie
    const movieBookedSeats = {
      'The Haunting Shadows': [2, 5, 12, 18, 25],
      'Whispers in the Dark': [1, 3, 7, 10, 15],
      'The Cursed Manor': [4, 8, 14, 20, 22],
    };

    setBookedSeats(movieBookedSeats[selectedMovie] || []); // Default to an empty array if no seats are booked
  }, [movie]);

  const handleSeatClick = (index) => {
    if (bookedSeats.includes(index)) return; // Prevent clicking on booked seats

    setSelectedSeats((prev) =>
      prev.includes(index)
        ? prev.filter((seat) => seat !== index) // Deselect seat
        : [...prev, index] // Select seat
    );
  };

  const confirmBooking = () => {
    if (!date || !time || selectedSeats.length === 0) {
      alert('Please complete all fields and select seats.');
      return;
    }

    const serial = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    setSerialNumber(serial);
    setShowModal(true);
    console.log('Booking confirmed, modal should show up'); // Debugging log
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    console.log('showModal state:', showModal); // Debugging log
  }, [showModal]);

  return (
    <div className="flex flex-wrap gap-5 justify-center text-white max-w-[1200px] m-auto bg-[#1e2a35] p-5 rounded-md">
      <div className="bg-white rounded-sm p-3 text-black">
        <div className="text-center mb-[20px] font-bold">SCREEN</div>
        <div className="grid gap-8 justify-center grid-cols-10">    
          {Array.from({ length: rows * cols }).map((_, index) => (
            <div
              key={index}
              className={`h-[30px] w-[30px] bg-[#ccc] rounded-sm cursor-pointer ${
                bookedSeats.includes(index)
                  ? 'bg-[#555] cursor-not-allowed'
                  : selectedSeats.includes(index)
                  ? 'bg-[#41bdbd]'
                  : ''
              }`}
              onClick={() => handleSeatClick(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-[300px]">
        <h2 className="movie-title">{movie}</h2>

        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time">Select Time</label>
        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="1:00 PM">1:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>

        <label htmlFor="payment-method">Choose Payment Method</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="gcash">Gcash</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">Paypal</option>
        </select>

        <div className="payment-details">
          {paymentMethod === 'gcash' && (
            <>
              <p>Use this GCash number for testing: <strong>09154270092</strong></p>
            </>
          )}
          {paymentMethod === 'credit-card' && (
            <>
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" placeholder="Enter Card Number" />
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" />
            </>
          )}
          {paymentMethod === 'paypal' && (
            <>
              <label htmlFor="paypal-email">Paypal Email</label>
              <input type="email" id="paypal-email" placeholder="Enter Paypal Email" />
            </>
          )}
        </div>

        <div className="total-section">
          <p>Selected: {selectedSeats.length > 0 ? selectedSeats.map((seat) => `S${seat + 1}`).join(', ') : 'None'}</p>
          <p>Total: ₱{(selectedSeats.length * moviePrice).toFixed(2)}</p>
        </div>

        <button className="confirm-btn" onClick={confirmBooking}>
          Confirm Booking
        </button>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          {console.log('Modal is being rendered')} {/* Debugging log */}
          <div className="modal-content ticket" onClick={(e) => e.stopPropagation()}>
            <h2>🎟️ Your Ticket 🎟️</h2>
            <div className="ticket-details">
              <p><strong>Transaction Number:</strong> {serialNumber}</p>
              <p><strong>Movie:</strong> {movie}</p>
              <p><strong>Seats:</strong> {selectedSeats.map((seat) => `S${seat + 1}`).join(', ')}</p>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {time}</p>
              <p><strong>Total Price:</strong> ₱{(selectedSeats.length * moviePrice).toFixed(2)}</p>
            </div>
            <div className="ticket-footer">
              <p>Thank you for booking with GoodSeats!</p>
              <p>Enjoy your movie! 🍿</p>
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;