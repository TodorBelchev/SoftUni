package com.softuni.Mobilelele.service;


import com.softuni.Mobilelele.model.service.UserLoginServiceModel;

public interface UserService {
    void initUsers();

    void login(UserLoginServiceModel serviceModel);
}
