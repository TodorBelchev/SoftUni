package com.softuni.Judge.model.binding;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class ProblemCreateBindingModel {
    @NotNull
    private String name;

    @NotNull
    @Min(1)
    private Integer points;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
