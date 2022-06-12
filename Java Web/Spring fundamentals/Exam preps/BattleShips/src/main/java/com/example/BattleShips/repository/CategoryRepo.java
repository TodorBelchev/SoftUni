package com.example.BattleShips.repository;

import com.example.BattleShips.model.entity.CategoryEntity;
import com.example.BattleShips.model.enums.CategoryNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<CategoryEntity, Long> {
    Optional<CategoryEntity> findByName(CategoryNameEnum category);
}
