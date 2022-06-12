package com.example.BattleShips.service.impl;

import com.example.BattleShips.model.entity.UserEntity;
import com.example.BattleShips.model.service.UserServiceModel;
import com.example.BattleShips.repository.UserRepo;
import com.example.BattleShips.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepo;
    private final AppUserDetailsService appUserDetailsService;

    public UserServiceImpl(ModelMapper modelMapper, PasswordEncoder passwordEncoder, UserRepo userRepo, AppUserDetailsService appUserDetailsService) {
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
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
