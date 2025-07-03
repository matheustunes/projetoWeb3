package br.com.gymchain.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import br.com.gymchain.api.domain.model.Workout;

import java.util.List;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
   
    List<Workout> findByUserId(Long userId);
}