package com.softuni.Mobilelele.controller;

import com.softuni.Mobilelele.model.binding.UserLoginBindingModel;
import com.softuni.Mobilelele.model.service.UserLoginServiceModel;
import com.softuni.Mobilelele.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {

    private final ModelMapper modelMapper;
    private final UserService userService;

    public UserController(ModelMapper modelMapper, UserService userService) {
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @GetMapping("/login")
    public String getLogin() {
        return "auth-login";
    }

    @PostMapping("/login")
    public String postLogin(@Valid UserLoginBindingModel userModel,
            BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return "redirect:/login";
        }

        UserLoginServiceModel serviceModel = modelMapper.map(userModel, UserLoginServiceModel.class);
        userService.login(serviceModel);
        return "redirect:/";
    }
}
