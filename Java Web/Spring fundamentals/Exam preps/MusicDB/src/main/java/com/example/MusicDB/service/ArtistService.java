package com.example.MusicDB.service;

import com.example.MusicDB.model.entity.ArtistEntity;

public interface ArtistService {
    void init();

    ArtistEntity findByNameEnum(ArtistEntity artist);
}
