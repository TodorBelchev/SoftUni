package com.example.BattleShips.repository;

import com.example.BattleShips.model.entity.ShipEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShipRepo extends JpaRepository<ShipEntity, Long> {
}
