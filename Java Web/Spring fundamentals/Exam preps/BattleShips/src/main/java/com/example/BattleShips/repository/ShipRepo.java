package com.example.BattleShips.repository;

import com.example.BattleShips.model.entity.ShipEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ShipRepo extends JpaRepository<ShipEntity, Long> {
    List<ShipEntity> findByUserUsername(String currentPrincipalName);

    List<ShipEntity> findByUserUsernameNotLike(String currentPrincipalName);

    ShipEntity getByName(String name);
}
