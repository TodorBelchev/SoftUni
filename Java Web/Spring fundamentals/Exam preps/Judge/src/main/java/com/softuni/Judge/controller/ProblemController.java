package com.softuni.Judge.controller;

import com.softuni.Judge.model.binding.ProblemCreateBindingModel;
import com.softuni.Judge.model.service.ProblemServiceModel;
import com.softuni.Judge.service.ProblemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/problems")
public class ProblemController {

    private final ProblemService problemService;
    private final ModelMapper modelMapper;

    public ProblemController(ProblemService problemService, ModelMapper modelMapper) {
        this.problemService = problemService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/create")
    public String getCreate() {
        return "create-problem";
    }

    @PostMapping("/create")
    public String postCreate(@Valid ProblemCreateBindingModel problemCreateBindingModel,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("invalid", problemCreateBindingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.problemCreateBindingModel", bindingResult);

            return "redirect:create";
        }

        problemService.create(modelMapper.map(problemCreateBindingModel, ProblemServiceModel.class));

        return "redirect:/home";
    }

    @ModelAttribute
    public ProblemCreateBindingModel problemCreateBindingModel() {
        return new ProblemCreateBindingModel();
    }
}
