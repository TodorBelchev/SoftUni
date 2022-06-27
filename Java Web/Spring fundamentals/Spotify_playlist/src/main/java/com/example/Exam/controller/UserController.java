package com.example.Exam.controller;

import com.example.Exam.exception.UsernameExistsException;
import com.example.Exam.model.dto.UserLoginDTO;
import com.example.Exam.model.dto.UserRegisterDTO;
import com.example.Exam.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String getLogin(Model model) {
        if (!model.containsAttribute("isFound")) {
            model.addAttribute("isFound", true);
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (!currentPrincipalName.equals("anonymousUser")) {
            return "redirect:/";
        }

        return "login";
    }

    @PostMapping("/login")
    public String postLogin(@Valid UserLoginDTO userLoginDTO,
                            BindingResult bindingResult,
                            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("userLoginDTO", userLoginDTO);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.userLoginDTO", bindingResult);

            return "redirect:login";
        }

        boolean isFound = userService.findByUsernameAndPassword(userLoginDTO.getUsername(), userLoginDTO.getPassword());

        if (!isFound) {
            redirectAttributes.addFlashAttribute("userLoginDTO", userLoginDTO);
            redirectAttributes.addFlashAttribute("isFound", false);

            return "redirect:login";
        }


        return "redirect:/";
    }

    @GetMapping("/register")
    public String getRegister(Model model) {
        if (!model.containsAttribute("usernameExists")) {
            model.addAttribute("usernameExists", false);
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (!currentPrincipalName.equals("anonymousUser")) {
            return "redirect:/";
        }

        return "register";
    }

    @PostMapping("/register")
    public String postRegister(@Valid UserRegisterDTO userRegisterDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() || !userRegisterDTO.getPassword().equals(userRegisterDTO.getConfirmPassword())) {
            redirectAttributes.addFlashAttribute("userRegisterDTO", userRegisterDTO);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.userRegisterDTO", bindingResult);

            return "redirect:register";
        }

        try {
            userService.register(userRegisterDTO);
        } catch (UsernameExistsException ex) {
            redirectAttributes.addFlashAttribute("userRegisterDTO", userRegisterDTO);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.userRegisterDTO", bindingResult);
            redirectAttributes.addFlashAttribute("usernameExists", true);

            return "redirect:register";
        }

        return "redirect:/";
    }

    @GetMapping("/{userId}/playlist/add/{songId}")
    public String addToPlaylist(@PathVariable Long userId, @PathVariable Long songId) {
        userService.addToPlaylist(userId, songId);

        return "redirect:/";
    }

    @GetMapping("/{userId}/playlist/removeAll")
    public String removeAllFromPlaylist(@PathVariable Long userId) {
        userService.removeAllSongsFromPlaylist(userId);

        return "redirect:/";
    }

    @ModelAttribute
    public UserRegisterDTO userRegisterDTO() {
        return new UserRegisterDTO();
    }

    @ModelAttribute
    public UserLoginDTO userLoginDTO() {
        return new UserLoginDTO();
    }
}
