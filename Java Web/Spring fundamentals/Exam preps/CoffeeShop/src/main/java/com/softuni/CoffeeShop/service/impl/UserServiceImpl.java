package com.softuni.CoffeeShop.service.impl;

import com.softuni.CoffeeShop.model.entity.UserEntity;
import com.softuni.CoffeeShop.model.service.UserServiceModel;
import com.softuni.CoffeeShop.repository.UserRepo;
import com.softuni.CoffeeShop.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final AppUserDetailsService appUserDetailsService;

    public UserServiceImpl(UserRepo userRepo,
                           ModelMapper modelMapper,
                           PasswordEncoder passwordEncoder,
                           AppUserDetailsService appUserDetailsService) {
        this.userRepo = userRepo;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.appUserDetailsService = appUserDetailsService;
    }

    @Override
    public UserServiceModel register(UserServiceModel userServiceModel) {
        UserEntity user = modelMapper.map(userServiceModel, UserEntity.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        UserEntity savedUser = userRepo.save(user);
        UserDetails principal = appUserDetailsService.loadUserByUsername(savedUser.getUsername());
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                principal,
                savedUser.getPassword(),
                principal.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return modelMapper.map(savedUser, UserServiceModel.class);
    }

    @Override
    public UserServiceModel findByUsernameAndPassword(String username, String password) {
        UserServiceModel userServiceModel = userRepo.findByUsernameAndPassword(username, password)
                .map(user -> modelMapper.map(user, UserServiceModel.class))
                .orElse(null);

        if (userServiceModel != null) {
            UserDetails principal = appUserDetailsService.loadUserByUsername(userServiceModel.getUsername());
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    principal,
                    userServiceModel.getPassword(),
                    principal.getAuthorities()
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        return userServiceModel;
    }
}
