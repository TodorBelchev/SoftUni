package com.softuni.Judge.repository;

import com.softuni.Judge.model.entity.ProblemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepo extends JpaRepository<ProblemEntity, String> {
}
