package com.example.Exam.utils;

import com.example.Exam.model.dto.SongDTO;
import com.example.Exam.model.view.SongViewModel;

import java.util.function.Function;

public class SongUtils {

    public static Function<SongDTO, SongViewModel> convertSongDTOToSongViewModel() {
        return s -> {
            SongViewModel songViewModel = new SongViewModel();
            songViewModel.setId(s.getId());
            songViewModel.setPerformer(s.getPerformer());
            songViewModel.setStyle(s.getStyle());
            songViewModel.setReleaseDate(s.getReleaseDate());
            songViewModel.setTitle(s.getTitle());

            int minutes = s.getDuration() / 60;
            int seconds = s.getDuration() % 60;
            songViewModel.setDuration(String.format("%s:%s", String.format("%2d", minutes).replace(' ', '0'), String.format("%2d", seconds).replace(' ', '0')));
            return songViewModel;
        };
    }
}
