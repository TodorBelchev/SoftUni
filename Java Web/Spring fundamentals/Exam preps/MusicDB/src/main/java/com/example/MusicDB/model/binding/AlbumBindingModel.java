package com.example.MusicDB.model.binding;

import com.example.MusicDB.model.entity.ArtistEntity;
import com.example.MusicDB.model.entity.UserEntity;
import com.example.MusicDB.model.enums.GenreEnum;
import com.example.MusicDB.model.enums.SingerNameEnum;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.util.Date;

public class AlbumBindingModel {

    private Long id;

    @Size(min = 3, max = 20)
    private String name;

    @Positive
    private BigDecimal price;

    @Size(min = 5)
    private String imageUrl;

    @Size(min = 5)
    private String description;

    @Min(10)
    private int copies;

    @PastOrPresent
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date releaseDate;

    private String producer;

    @NotNull
    private GenreEnum genre;

    @NotNull
    private SingerNameEnum artist;

    private UserEntity addedFrom;

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public SingerNameEnum getArtist() {
        return artist;
    }

    public void setArtist(SingerNameEnum artist) {
        this.artist = artist;
    }

    public UserEntity getAddedFrom() {
        return addedFrom;
    }

    public void setAddedFrom(UserEntity addedFrom) {
        this.addedFrom = addedFrom;
    }
}
