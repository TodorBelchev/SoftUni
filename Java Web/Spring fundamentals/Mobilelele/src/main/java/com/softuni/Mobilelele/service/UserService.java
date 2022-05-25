package com.softuni.Mobilelele.service;


import com.softuni.Mobilelele.model.service.UserLoginServiceModel;
import com.softuni.Mobilelele.model.service.UserRegisterServiceModel;

public interface UserService {
    void initUsers();

    void login(UserLoginServiceModel serviceModel);

    void register(UserRegisterServiceModel serviceModel);
}
