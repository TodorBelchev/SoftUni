package com.example.Exam.controller;

import com.example.Exam.exception.PerformerExistsException;
import com.example.Exam.model.dto.AddSongDTO;
import com.example.Exam.service.SongService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/songs")
public class SongController {

    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping("/add")
    public String getAddSong() {
        return "song-add";
    }

    @PostMapping("/add")
    public String postAddSong(@Valid AddSongDTO addSongDTO,
                              BindingResult bindingResult,
                              RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("addSongDTO", addSongDTO);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.addSongDTO", bindingResult);

            return "redirect:add";
        }

        try {
            songService.addSong(addSongDTO);
        } catch (PerformerExistsException ex) {
            redirectAttributes.addFlashAttribute("addSongDTO", addSongDTO);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.addSongDTO", bindingResult);
            redirectAttributes.addFlashAttribute("performerExists", true);

            return "redirect:add";
        }

        return "redirect:/";
    }

    @ModelAttribute
    public AddSongDTO addSongDTO() {
        return new AddSongDTO();
    }
}
