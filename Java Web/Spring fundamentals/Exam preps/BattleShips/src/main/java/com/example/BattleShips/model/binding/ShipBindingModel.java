package com.example.BattleShips.model.binding;

import com.example.BattleShips.model.entity.CategoryEntity;
import com.example.BattleShips.model.entity.UserEntity;
import com.example.BattleShips.model.enums.CategoryNameEnum;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.Date;

public class ShipBindingModel {
    @Size(min = 2, max = 10)
    private String name;

    @Positive
    private Long health;

    @Positive
    private Long power;

    @PastOrPresent
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date created;

    @NotNull
    private CategoryNameEnum category;

    private UserEntity user;

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
