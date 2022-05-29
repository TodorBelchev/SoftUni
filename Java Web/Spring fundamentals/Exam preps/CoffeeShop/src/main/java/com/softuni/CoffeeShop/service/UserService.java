package com.softuni.CoffeeShop.service;

import com.softuni.CoffeeShop.model.service.UserServiceModel;

public interface UserService {
    UserServiceModel register(UserServiceModel map);

    UserServiceModel findByUsernameAndPassword(String username, String password);
}
