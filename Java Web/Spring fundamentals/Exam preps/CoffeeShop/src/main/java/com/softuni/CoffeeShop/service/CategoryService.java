package com.softuni.CoffeeShop.service;

import com.softuni.CoffeeShop.model.entity.CategoryEntity;
import com.softuni.CoffeeShop.model.enums.CategoryNameEnum;

import java.util.Optional;

public interface CategoryService {
    void initCategories();

    Optional<CategoryEntity> findByCategoryNameEnum(CategoryNameEnum category);
}
