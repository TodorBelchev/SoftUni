package com.example.Exam.model.entity;

import com.example.Exam.model.enums.StyleNameEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "styles")
public class StyleEntity extends BaseEntity {

    @Column(unique = true)
    @NotNull
    @Enumerated(value = EnumType.STRING)
    private StyleNameEnum name;

    @Column()
    private String description;

    public StyleNameEnum getName() {
        return name;
    }

    public void setName(StyleNameEnum name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
