package com.example.ShoppingList.repository;

import com.example.ShoppingList.model.entity.CategoryEntity;
import com.example.ShoppingList.model.enums.CategoryEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<CategoryEntity, Long> {
    Optional<CategoryEntity> findByName(CategoryEnum categoryNameEnum);
}
