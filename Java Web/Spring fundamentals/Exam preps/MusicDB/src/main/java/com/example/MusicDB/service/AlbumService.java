package com.example.MusicDB.service;

import com.example.MusicDB.model.service.AlbumServiceModel;
import com.example.MusicDB.model.view.AlbumViewModel;

import java.util.List;

public interface AlbumService {
    AlbumServiceModel add(AlbumServiceModel map);

    List<AlbumViewModel> findAll();
}
