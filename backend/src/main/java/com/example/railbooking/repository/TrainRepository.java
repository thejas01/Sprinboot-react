package com.example.railbooking.repository;

import com.example.railbooking.model.Train;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainRepository extends JpaRepository<Train, Long> {
} 