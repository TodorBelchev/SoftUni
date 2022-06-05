package com.softuni.Judge.model.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "submissions")
public class SubmissionEntity extends BaseEntity {

    @Column(nullable = false)
    private ArrayList<String> code = new ArrayList<>();

    @Column(nullable = false)
    private Integer achievedResult;

    @Column(nullable = false)
    private LocalDateTime createdOn;

    @ManyToOne
    private ProblemEntity problem;

    @ManyToOne
    private UserEntity user;

    public List<String> getCode() {
        return code;
    }

    public void setCode(ArrayList<String> code) {
        this.code = code;
    }

    public Integer getAchievedResult() {
        return achievedResult;
    }

    public void setAchievedResult(Integer achievedResult) {
        this.achievedResult = achievedResult;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public ProblemEntity getProblem() {
        return problem;
    }

    public void setProblem(ProblemEntity problem) {
        this.problem = problem;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
