package com.example.Exam.service;

import com.example.Exam.model.entity.StyleEntity;
import com.example.Exam.model.enums.StyleNameEnum;
import com.example.Exam.repository.StyleRepo;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
public class StyleService {

    private final StyleRepo styleRepo;

    public StyleService(StyleRepo styleRepo) {
        this.styleRepo = styleRepo;
    }

    public void initStyles() {
        if (styleRepo.count() != 0) {
            return;
        }

        Arrays.stream(StyleNameEnum.values())
                .forEach(styleNameEnum -> {
                    StyleEntity category = new StyleEntity();
                    category.setName(styleNameEnum);
                    category.setDescription("lorem ipsum");

                    styleRepo.save(category);
                });

    }

    public Optional<StyleEntity> getByName(StyleNameEnum style) {
        return styleRepo.getByName(style);
    }
}
