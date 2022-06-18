package com.example.MusicDB.service.impl;

import com.example.MusicDB.model.entity.AlbumEntity;
import com.example.MusicDB.model.entity.UserEntity;
import com.example.MusicDB.model.service.AlbumServiceModel;
import com.example.MusicDB.model.view.AlbumViewModel;
import com.example.MusicDB.repository.AlbumRepo;
import com.example.MusicDB.service.AlbumService;
import com.example.MusicDB.service.ArtistService;
import com.example.MusicDB.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlbumServiceImpl implements AlbumService {

    private final AlbumRepo albumRepo;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private final ArtistService artistService;

    public AlbumServiceImpl(AlbumRepo albumRepo, ModelMapper modelMapper, UserService userService, ArtistService artistService) {
        this.albumRepo = albumRepo;
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.artistService = artistService;
    }

    @Override
    public AlbumServiceModel add(AlbumServiceModel albumServiceModel) {
        AlbumEntity album = modelMapper.map(albumServiceModel, AlbumEntity.class);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            UserEntity user = userService.findByUsername(currentUserName);
            album.setAddedFrom(user);
        }

        album.setArtist(artistService.findByNameEnum(albumServiceModel.getArtist()));

        albumRepo.save(album);
        return modelMapper.map(album, AlbumServiceModel.class);
    }

    @Override
    public List<AlbumViewModel> findAll() {
        return albumRepo.findAll()
                .stream()
                .map(albumEntity -> modelMapper.map(albumEntity, AlbumViewModel.class))
                .collect(Collectors.toList());
    }
}
