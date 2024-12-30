import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const TrainList = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/trains')
            .then(response => setTrains(response.data))
            .catch(error => console.error('Error fetching trains:', error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Available Trains</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Train Number</TableCell>
                        <TableCell>Train Name</TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Departure</TableCell>
                        <TableCell>Arrival</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trains.map(train => (
                        <TableRow key={train.id}>
                            <TableCell>{train.trainNumber}</TableCell>
                            <TableCell>{train.trainName}</TableCell>
                            <TableCell>{train.sourceStation}</TableCell>
                            <TableCell>{train.destinationStation}</TableCell>
                            <TableCell>{train.departureTime}</TableCell>
                            <TableCell>{train.arrivalTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default TrainList; 