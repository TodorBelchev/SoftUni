package com.softuni.Judge.controller;

import com.softuni.Judge.model.service.ProblemServiceModel;
import com.softuni.Judge.model.view.ProblemViewModel;
import com.softuni.Judge.service.ProblemService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class HomeController {

    private final ProblemService problemService;
    private final ModelMapper modelMapper;

    public HomeController(ProblemService problemService, ModelMapper modelMapper) {
        this.problemService = problemService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/")
    public String home(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }

        List<ProblemServiceModel> all = problemService.findAll();
        model.addAttribute("problems", all.stream()
                .map(problemServiceModel -> modelMapper.map(problemServiceModel, ProblemViewModel.class))
                .collect(Collectors.toList()));

        return "home";
    }
}
