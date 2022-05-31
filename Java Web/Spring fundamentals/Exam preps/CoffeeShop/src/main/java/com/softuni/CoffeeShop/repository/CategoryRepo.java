package com.softuni.CoffeeShop.repository;

import com.softuni.CoffeeShop.model.entity.CategoryEntity;
import com.softuni.CoffeeShop.model.enums.CategoryNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<CategoryEntity, Long> {
    Optional<CategoryEntity> findByName(CategoryNameEnum categoryNameEnum);
}
