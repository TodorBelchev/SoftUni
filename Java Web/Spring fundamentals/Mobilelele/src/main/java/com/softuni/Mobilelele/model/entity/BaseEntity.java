package com.softuni.Mobilelele.model.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@MappedSuperclass
public class BaseEntity {
    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(nullable = false)
    protected LocalDateTime created;

    @Column(nullable = false)
    protected LocalDateTime modified;

    @PrePersist
    public void prePersist() {
        setCreated(LocalDateTime.now());
        setModified(LocalDateTime.now());
    }

    @PreUpdate
    public void preUpdate() {
        setModified(LocalDateTime.now());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public LocalDateTime getModified() {
        return modified;
    }

    public void setModified(LocalDateTime modified) {
        this.modified = modified;
    }
}
