package com.softuni.Judge.service.impl;

import com.softuni.Judge.model.entity.ProblemEntity;
import com.softuni.Judge.model.service.ProblemServiceModel;
import com.softuni.Judge.repository.ProblemRepo;
import com.softuni.Judge.service.ProblemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ProblemServiceImpl implements ProblemService {

    private final ProblemRepo problemRepo;
    private final ModelMapper modelMapper;

    public ProblemServiceImpl(ProblemRepo problemRepo, ModelMapper modelMapper) {
        this.problemRepo = problemRepo;
        this.modelMapper = modelMapper;
    }

    @Override
    public ProblemServiceModel create(ProblemServiceModel problemServiceModel) {
        ProblemEntity problem = modelMapper.map(problemServiceModel, ProblemEntity.class);

        ProblemEntity saved = problemRepo.save(problem);
        return modelMapper.map(saved, ProblemServiceModel.class);
    }
}
