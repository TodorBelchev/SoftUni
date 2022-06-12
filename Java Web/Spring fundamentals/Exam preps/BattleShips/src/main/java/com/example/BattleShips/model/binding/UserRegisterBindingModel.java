package com.example.BattleShips.model.binding;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class UserRegisterBindingModel {
    @Size(min = 3, max = 10)
    private String username;

    @Size(min = 5, max = 20)
    private String fullName;

    @Size(min = 3)
    private String password;

    @Size(min = 3)
    private String confirmPassword;

    @Email
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
