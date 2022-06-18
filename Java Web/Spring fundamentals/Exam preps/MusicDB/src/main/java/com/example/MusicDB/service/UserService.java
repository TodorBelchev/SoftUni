package com.example.MusicDB.service;

import com.example.MusicDB.model.entity.UserEntity;
import com.example.MusicDB.model.service.UserServiceModel;

public interface UserService {
    UserServiceModel register(UserServiceModel map);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    UserEntity findByUsername(String currentUserName);
}
