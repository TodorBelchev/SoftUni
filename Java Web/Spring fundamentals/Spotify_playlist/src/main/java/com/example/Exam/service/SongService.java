package com.example.Exam.service;

import com.example.Exam.exception.PerformerExistsException;
import com.example.Exam.model.dto.AddSongDTO;
import com.example.Exam.model.dto.SongDTO;
import com.example.Exam.model.entity.SongEntity;
import com.example.Exam.model.entity.StyleEntity;
import com.example.Exam.model.enums.StyleNameEnum;
import com.example.Exam.repository.SongRepo;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SongService {

    private final ModelMapper modelMapper;

    private final SongRepo songRepo;

    private final StyleService styleService;

    public SongService(ModelMapper modelMapper, SongRepo songRepo, StyleService styleService) {
        this.modelMapper = modelMapper;
        this.songRepo = songRepo;
        this.styleService = styleService;
    }

    public void addSong(AddSongDTO addSongDTO) {
        SongEntity songEntity = modelMapper.map(addSongDTO, SongEntity.class);
        Optional<StyleEntity> styleEntity = styleService.getByName(addSongDTO.getStyle());
        Optional<SongEntity> byPerformer = songRepo.findByPerformer(songEntity.getPerformer());

        if (byPerformer.isPresent()) {
            throw new PerformerExistsException();
        }

        styleEntity.ifPresent(songEntity::setStyle);
        songRepo.save(songEntity);
    }

    public List<AddSongDTO> getAll() {
        return songRepo.findAll()
                .stream()
                .map(songEntity -> modelMapper.map(songEntity, AddSongDTO.class))
                .collect(Collectors.toList());
    }

    public List<SongDTO> getAllByStyleNameEnum(StyleNameEnum styleNameEnum) {
        return songRepo.findByStyleName(styleNameEnum)
                .stream()
                .map(songEntity -> modelMapper.map(songEntity, SongDTO.class))
                .collect(Collectors.toList());
    }
}
