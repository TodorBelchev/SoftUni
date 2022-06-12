package com.example.BattleShips.model.service;

import com.example.BattleShips.model.entity.CategoryEntity;
import com.example.BattleShips.model.entity.UserEntity;
import com.example.BattleShips.model.enums.CategoryNameEnum;

import java.time.LocalDateTime;
import java.util.Date;

public class ShipServiceModel {

    private Long id;

    private String name;

    private Long health;

    private Long power;

    private Date created;

    private CategoryNameEnum category;

    private UserEntity user;

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

    public Long getHealth() {
        return health;
    }

    public void setHealth(Long health) {
        this.health = health;
    }

    public Long getPower() {
        return power;
    }

    public void setPower(Long power) {
        this.power = power;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public CategoryNameEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryNameEnum category) {
        this.category = category;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
