package com.example.Exam.model.dto;

import com.example.Exam.model.enums.StyleNameEnum;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.util.Date;

public class AddSongDTO {

    @Size(min = 3, max = 20)
    @NotBlank
    private String performer;

    @Size(min = 2, max = 20)
    @NotBlank
    private String title;

    @Positive
    @NotNull
    private int duration;

    @PastOrPresent
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date releaseDate;

    @NotNull
    private StyleNameEnum style;

    public String getPerformer() {
        return performer;
    }

    public void setPerformer(String performer) {
        this.performer = performer;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public StyleNameEnum getStyle() {
        return style;
    }

    public void setStyle(StyleNameEnum style) {
        this.style = style;
    }
}
