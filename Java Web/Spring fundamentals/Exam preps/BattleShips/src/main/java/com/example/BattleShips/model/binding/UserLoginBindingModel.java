package com.example.BattleShips.model.binding;

import javax.validation.constraints.Size;

public class UserLoginBindingModel {
    @Size(min = 3, max = 10)
    private String username;

    @Size(min = 3)
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
