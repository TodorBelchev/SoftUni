package com.softuni.Judge.model.binding;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class UserLoginBindingModel {
    @NotNull
    private String username;

    @Email
    private String email;

    @NotNull
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
