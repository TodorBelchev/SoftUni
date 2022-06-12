package com.example.BattleShips.service.impl;

import com.example.BattleShips.model.entity.CategoryEntity;
import com.example.BattleShips.model.enums.CategoryNameEnum;
import com.example.BattleShips.repository.CategoryRepo;
import com.example.BattleShips.service.CategoryService;
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
    public void initCategories() {
        if (categoryRepo.count() != 0) {
            return;
        }

        Arrays.stream(CategoryNameEnum.values())
                .forEach(categoryNameEnum -> {
                    CategoryEntity category = new CategoryEntity();
                    category.setName(categoryNameEnum);

                    switch (categoryNameEnum) {
                        case BATTLE, CARGO, PATROL -> category.setDescription("Lorem ipsum");
                    }

                    categoryRepo.save(category);
                });
    }

    @Override
    public Optional<CategoryEntity> findByCategoryNameEnum(CategoryNameEnum category) {
        return categoryRepo.findByName(category);
    }
}
