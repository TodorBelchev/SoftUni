package com.example.Exam.repository;

import com.example.Exam.model.entity.SongEntity;
import com.example.Exam.model.enums.StyleNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface SongRepo extends JpaRepository<SongEntity, Long> {
    Optional<SongEntity> findByPerformer(String performer);

    Collection<SongEntity> findByStyleName(StyleNameEnum styleNameEnum);
}
