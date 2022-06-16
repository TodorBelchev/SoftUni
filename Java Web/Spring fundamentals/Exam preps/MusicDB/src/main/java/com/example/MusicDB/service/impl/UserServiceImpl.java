package com.example.MusicDB.service.impl;

import com.example.MusicDB.model.entity.UserEntity;
import com.example.MusicDB.model.service.UserServiceModel;
import com.example.MusicDB.repository.UserRepo;
import com.example.MusicDB.service.UserService;
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
}
