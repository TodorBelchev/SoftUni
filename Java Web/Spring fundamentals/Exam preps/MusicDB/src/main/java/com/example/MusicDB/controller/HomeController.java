package com.example.MusicDB.controller;

import com.example.MusicDB.model.view.AlbumViewModel;
import com.example.MusicDB.service.AlbumService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {

    private final AlbumService albumService;
    private final ModelMapper modelMapper;

    public HomeController(AlbumService albumService, ModelMapper modelMapper) {
        this.albumService = albumService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/")
    public String getHome(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }

        List<AlbumViewModel> albums = albumService.findAll();
        model.addAttribute("albums", albums);
        model.addAttribute("totalCopies", albums.stream().mapToInt(AlbumViewModel::getCopies).sum());

        return "home";
    }
}
