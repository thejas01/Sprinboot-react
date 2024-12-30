import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const BookingForm = () => {
    const [booking, setBooking] = useState({
        passengerName: '',
        passengerEmail: '',
        trainId: '',
        bookingDate: '',
        seatNumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/bookings', booking)
            .then(response => {
                alert('Booking successful!');
                setBooking({
                    passengerName: '',
                    passengerEmail: '',
                    trainId: '',
                    bookingDate: '',
                    seatNumber: ''
                });
            })
            .catch(error => console.error('Error creating booking:', error));
    };

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Book a Ticket</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Passenger Name"
                    name="passengerName"
                    value={booking.passengerName}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="passengerEmail"
                    type="email"
                    value={booking.passengerEmail}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Train ID"
                    name="trainId"
                    type="number"
                    value={booking.trainId}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Booking Date"
                    name="bookingDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={booking.bookingDate}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Seat Number"
                    name="seatNumber"
                    type="number"
                    value={booking.seatNumber}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '20px' }}
                >
                    Book Ticket
                </Button>
            </form>
        </Container>
    );
};

export default BookingForm; 