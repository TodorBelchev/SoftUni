package com.softuni.Judge.service;

import com.softuni.Judge.model.service.ProblemServiceModel;

import java.util.List;

public interface ProblemService {
    ProblemServiceModel create(ProblemServiceModel map);

    List<ProblemServiceModel> findAll();
}
