package com.example.ShoppingList.model.binding;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class UserLoginBindingModel {
    @Size(min = 3, max = 20)
    private String username;

    @Size(min = 3, max = 20)
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
