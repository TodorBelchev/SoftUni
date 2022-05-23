package com.softuni.Mobilelele.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "brands")
public class Brand extends BaseEntity {
    @Column(nullable = false, unique = true)
    private String name;

    public Brand() {
    }

    public Brand(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
