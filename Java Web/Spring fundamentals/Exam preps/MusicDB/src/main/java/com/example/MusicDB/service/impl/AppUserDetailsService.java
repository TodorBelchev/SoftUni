package com.example.MusicDB.service.impl;

import com.example.MusicDB.model.entity.UserEntity;
import com.example.MusicDB.repository.UserRepo;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Component
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepo userRepo;

    public AppUserDetailsService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> userOptional = userRepo.findByUsername(username);

        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("Username not found");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        UserEntity user = userOptional.get();
        return new User(user.getUsername(), user.getPassword(), authorities);
    }
}
