package com.softuni.Mobilelele.model.entity;

import com.softuni.Mobilelele.model.enums.CategoryEnum;

import javax.persistence.*;

@Entity
@Table(name = "models")
public class Model extends BaseEntity {
    @Column(nullable = false)
    private String name;

    @Enumerated(value = EnumType.STRING)
    private CategoryEnum categoryEnum;

    @Column(name = "image_url", length = 512)
    private String imageUrl;

    @Column(name = "start_year")
    private Integer startYear;

    @Column(name = "end_year")
    private Integer endYear;

    @ManyToOne
    private Brand brand;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CategoryEnum getCategory() {
        return categoryEnum;
    }

    public void setCategory(CategoryEnum categoryEnum) {
        this.categoryEnum = categoryEnum;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getStartYear() {
        return startYear;
    }

    public void setStartYear(Integer startYear) {
        this.startYear = startYear;
    }

    public Integer getEndYear() {
        return endYear;
    }

    public void setEndYear(Integer endYear) {
        this.endYear = endYear;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }
}
