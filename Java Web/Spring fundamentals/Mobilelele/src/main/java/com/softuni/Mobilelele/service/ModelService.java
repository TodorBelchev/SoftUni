package com.softuni.Mobilelele.service;

import com.softuni.Mobilelele.model.entity.Model;

import java.util.Optional;

public interface ModelService {
    void initModels();

    Optional<Model> findByName(String name);
}
