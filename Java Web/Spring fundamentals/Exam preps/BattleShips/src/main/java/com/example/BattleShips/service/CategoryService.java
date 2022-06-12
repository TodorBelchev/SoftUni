package com.example.BattleShips.service;

import com.example.BattleShips.model.entity.CategoryEntity;
import com.example.BattleShips.model.enums.CategoryNameEnum;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    void initCategories();

    Optional<CategoryEntity> findByCategoryNameEnum(CategoryNameEnum category);
}
