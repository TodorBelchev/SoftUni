package com.example.BattleShips.service;

import com.example.BattleShips.model.entity.UserEntity;
import com.example.BattleShips.model.service.UserServiceModel;

public interface UserService {
    UserServiceModel register(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    UserEntity findByUsername(String currentUserName);
}
