package com.softuni.Judge.service;

import com.softuni.Judge.model.service.UserServiceModel;

public interface UserService {
    UserServiceModel register(UserServiceModel map);

    UserServiceModel findByUsernameAndPassword(String username, String password);
}
