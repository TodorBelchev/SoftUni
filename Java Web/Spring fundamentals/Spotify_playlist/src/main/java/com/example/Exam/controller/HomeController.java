package com.example.Exam.controller;

import com.example.Exam.model.dto.SongDTO;
import com.example.Exam.model.entity.SongEntity;
import com.example.Exam.model.entity.UserEntity;
import com.example.Exam.model.enums.StyleNameEnum;
import com.example.Exam.model.view.SongViewModel;
import com.example.Exam.service.SongService;
import com.example.Exam.service.UserService;
import com.example.Exam.utils.SongUtils;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Controller
public class HomeController {

    private final SongService songService;

    private final ModelMapper modelMapper;

    private final UserService userService;

    public HomeController(SongService songService, ModelMapper modelMapper, UserService userService) {
        this.songService = songService;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @GetMapping
    public String getHome(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }

        UserEntity userEntity = userService.findByUsername(currentPrincipalName);
        List<SongViewModel> popSongs = songService.getAllByStyleNameEnum(StyleNameEnum.POP)
                .stream()
                .map(SongUtils.convertSongDTOToSongViewModel())
                .collect(Collectors.toList());
        List<SongViewModel> rockSongs = songService.getAllByStyleNameEnum(StyleNameEnum.ROCK)
                .stream()
                .map(SongUtils.convertSongDTOToSongViewModel())
                .collect(Collectors.toList());
        List<SongViewModel> jazSongs = songService.getAllByStyleNameEnum(StyleNameEnum.JAZZ)
                .stream()
                .map(SongUtils.convertSongDTOToSongViewModel())
                .collect(Collectors.toList());
        int totalTime = userEntity.getPlaylist().stream().map(SongEntity::getDuration).mapToInt(Integer::intValue).sum();
        int minutes = totalTime / 60;
        int seconds = totalTime % 60;


        model.addAttribute("popSongs", popSongs);
        model.addAttribute("rockSongs", rockSongs);
        model.addAttribute("jazSongs", jazSongs);
        model.addAttribute("user", userEntity);
        model.addAttribute("userPlaylist", userEntity.getPlaylist());
        model.addAttribute("totalTime", String.format("%s:%s", String.format("%2d", minutes).replace(' ', '0'), String.format("%2d", seconds).replace(' ', '0')));

        return "home";
    }


    @GetMapping("/home")
    public String getHome() {
        return "redirect:/";
    }
}
