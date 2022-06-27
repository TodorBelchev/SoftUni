package com.example.Exam.repository;

import com.example.Exam.model.entity.StyleEntity;
import com.example.Exam.model.enums.StyleNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StyleRepo extends JpaRepository<StyleEntity, Long> {
    Optional<StyleEntity> getByName(StyleNameEnum style);
}
