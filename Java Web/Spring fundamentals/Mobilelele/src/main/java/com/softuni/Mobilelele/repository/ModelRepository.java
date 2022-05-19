package com.softuni.Mobilelele.repository;

import com.softuni.Mobilelele.model.entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {
    Model findByName(String name);
}
