package com.example.MusicDB.repository;

import com.example.MusicDB.model.entity.ArtistEntity;
import com.example.MusicDB.model.enums.SingerNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepo extends JpaRepository<ArtistEntity, Long> {
    ArtistEntity findByName(SingerNameEnum name);
}
