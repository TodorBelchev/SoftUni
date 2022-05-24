package com.softuni.Mobilelele.controller;

import com.softuni.Mobilelele.model.binding.UserLoginBindingModel;
import com.softuni.Mobilelele.model.service.UserLoginServiceModel;
import com.softuni.Mobilelele.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
    public String postLogin(@Valid UserLoginBindingModel userLoginBindingModel,
                            BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("userLoginBindingModel", userLoginBindingModel);
            redirectAttributes.addFlashAttribute(
                    "org.springframework.validation.BindingResult.userLoginBindingModel", bindingResult);
            redirectAttributes.addFlashAttribute("bad_credentials", true);

            return "redirect:/login";
        }

        UserLoginServiceModel serviceModel = modelMapper.map(userLoginBindingModel, UserLoginServiceModel.class);
        userService.login(serviceModel);
        return "redirect:/";
    }

    @ModelAttribute
    public UserLoginBindingModel userLoginBindingModel() {
        return new UserLoginBindingModel();
    }
}
