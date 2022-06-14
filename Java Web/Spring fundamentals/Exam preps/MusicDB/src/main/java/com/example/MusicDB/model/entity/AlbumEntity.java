package com.example.MusicDB.model.entity;

import com.example.MusicDB.model.enums.GenreEnum;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "albums")
public class AlbumEntity extends BaseEntity {

    @Column
    @Size(min = 3, max = 20)
    private String name;

    @Column
    @Size(min = 5)
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    @Size(min = 5)
    private String description;

    @Column
    @Min(10)
    private int copies;

    @Column
    @PastOrPresent
    private Date releaseDate;

    @Column
    private String producer;

    @Column
    private GenreEnum genre;

    @ManyToOne
    private ArtistEntity artist;

    @ManyToOne
    private UserEntity addedFrom;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCopies() {
        return copies;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public GenreEnum getGenre() {
        return genre;
    }

    public void setGenre(GenreEnum genre) {
        this.genre = genre;
    }

    public ArtistEntity getArtist() {
        return artist;
    }

    public void setArtist(ArtistEntity artist) {
        this.artist = artist;
    }

    public UserEntity getAddedFrom() {
        return addedFrom;
    }

    public void setAddedFrom(UserEntity addedFrom) {
        this.addedFrom = addedFrom;
    }
}
