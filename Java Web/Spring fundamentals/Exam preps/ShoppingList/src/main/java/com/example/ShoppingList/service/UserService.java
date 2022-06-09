package com.example.ShoppingList.service;

import com.example.ShoppingList.model.service.UserServiceModel;

public interface UserService {
    UserServiceModel register(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);
}
