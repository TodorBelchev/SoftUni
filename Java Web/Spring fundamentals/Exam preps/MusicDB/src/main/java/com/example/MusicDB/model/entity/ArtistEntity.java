package com.example.MusicDB.model.entity;

import com.example.MusicDB.model.enums.SingerNameEnum;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "artists")
public class ArtistEntity extends BaseEntity {

    @Column
    private SingerNameEnum name;

    @Column(columnDefinition = "TEXT")
    private String careerInformation;

    public SingerNameEnum getName() {
        return name;
    }

    public void setName(SingerNameEnum name) {
        this.name = name;
    }

    public String getCareerInformation() {
        return careerInformation;
    }

    public void setCareerInformation(String careerInformation) {
        this.careerInformation = careerInformation;
    }
}
