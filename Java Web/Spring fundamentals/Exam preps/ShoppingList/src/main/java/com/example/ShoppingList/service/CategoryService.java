package com.example.ShoppingList.service;

import com.example.ShoppingList.model.entity.CategoryEntity;
import com.example.ShoppingList.model.enums.CategoryEnum;

import java.util.Optional;

public interface CategoryService {
    void initCategories();

    Optional<CategoryEntity> findByCategoryNameEnum(CategoryEnum category);
}
