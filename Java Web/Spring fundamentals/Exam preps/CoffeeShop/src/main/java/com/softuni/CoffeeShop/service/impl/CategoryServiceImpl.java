package com.softuni.CoffeeShop.service.impl;

import com.softuni.CoffeeShop.model.entity.CategoryEntity;
import com.softuni.CoffeeShop.model.enums.CategoryNameEnum;
import com.softuni.CoffeeShop.repository.CategoryRepo;
import com.softuni.CoffeeShop.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    public CategoryServiceImpl(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @Override
    public Optional<CategoryEntity> findByCategoryNameEnum(CategoryNameEnum category) {
        return categoryRepo.findByName(category);
    }

    @Override
    public void initCategories() {
        if (categoryRepo.count() != 0) {
            return;
        }

        Arrays.stream(CategoryNameEnum.values())
                .forEach(categoryNameEnum -> {
                    CategoryEntity category = new CategoryEntity();
                    category.setName(categoryNameEnum);

                    switch (categoryNameEnum) {
                        case CAKE -> category.setNeededTime(10);
                        case DRINK -> category.setNeededTime(1);
                        case COFFEE -> category.setNeededTime(2);
                        case OTHER -> category.setNeededTime(5);
                    }

                    categoryRepo.save(category);
                });
    }
}
