package com.example.ShoppingList.service.impl;

import com.example.ShoppingList.model.entity.CategoryEntity;
import com.example.ShoppingList.model.enums.CategoryEnum;
import com.example.ShoppingList.repository.CategoryRepo;
import com.example.ShoppingList.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    public CategoryServiceImpl(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @Override
    public void initCategories() {
        if (categoryRepo.count() != 0) {
            return;
        }

        Arrays.stream(CategoryEnum.values())
                .forEach(categoryNameEnum -> {
                    CategoryEntity category = new CategoryEntity();
                    category.setName(categoryNameEnum);

                    categoryRepo.save(category);
                });
    }
}
