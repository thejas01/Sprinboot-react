package com.example.railbooking.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "train_id")
    private Train train;
    
    private String passengerName;
    private String passengerEmail;
    private LocalDate bookingDate;
    private Integer seatNumber;
    private String status;
} 