package com.example.railbooking.controller;

import com.example.railbooking.model.Train;
import com.example.railbooking.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trains")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainController {
    
    @Autowired
    private TrainRepository trainRepository;
    
    @GetMapping
    public List<Train> getAllTrains() {
        return trainRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Train> getTrainById(@PathVariable Long id) {
        return trainRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
} 