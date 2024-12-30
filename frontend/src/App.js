import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import TrainList from './components/TrainList';
import BookingForm from './components/BookingForm';

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Rail Booking System
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Trains
                    </Button>
                    <Button color="inherit" component={Link} to="/book">
                        Book Ticket
                    </Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '20px' }}>
                <Routes>
                    <Route path="/" element={<TrainList />} />
                    <Route path="/book" element={<BookingForm />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App; 