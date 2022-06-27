package com.example.Exam.service;

import com.example.Exam.exception.UsernameExistsException;
import com.example.Exam.model.dto.UserRegisterDTO;
import com.example.Exam.model.entity.SongEntity;
import com.example.Exam.model.entity.UserEntity;
import com.example.Exam.repository.SongRepo;
import com.example.Exam.repository.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService {

    private final ModelMapper modelMapper;

    private final PasswordEncoder passwordEncoder;

    private final UserRepo userRepo;

    private final AppUserDetailsService appUserDetailsService;

    private final SongRepo songRepo;

    public UserService(ModelMapper modelMapper, PasswordEncoder passwordEncoder, UserRepo userRepo, AppUserDetailsService appUserDetailsService, SongRepo songRepo) {
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
        this.appUserDetailsService = appUserDetailsService;
        this.songRepo = songRepo;
    }

    public void register(UserRegisterDTO userRegisterDTO) {
        UserEntity user = modelMapper.map(userRegisterDTO, UserEntity.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<UserEntity> existingUser = userRepo.findByUsername(userRegisterDTO.getUsername());

        if (existingUser.isPresent()) {
            throw new UsernameExistsException();
        }

        UserEntity savedUser = userRepo.save(user);
        UserDetails principal = appUserDetailsService.loadUserByUsername(savedUser.getUsername());
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                principal,
                savedUser.getPassword(),
                principal.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    public boolean findByUsernameAndPassword(String username, String password) {
        Optional<UserEntity> userEntity = userRepo.findByUsernameAndPassword(username, password);

        if (userEntity.isPresent()) {
            UserDetails principal = appUserDetailsService.loadUserByUsername(userEntity.get().getUsername());
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    principal,
                    userEntity.get().getPassword(),
                    principal.getAuthorities()
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        return userEntity.isPresent();
    }

    public UserEntity findByUsername(String name) {
        return userRepo.findByUsername(name)
                .orElse(null);
    }

    public void addToPlaylist(Long userId, Long songId) {
        Optional<UserEntity> user = userRepo.findById(userId);
        Optional<SongEntity> song = songRepo.findById(songId);

        if (user.isPresent() && song.isPresent()) {
            UserEntity userEntity = user.get();
            userEntity.getPlaylist().add(song.get());
            userRepo.save(userEntity);
        }
    }

    public void removeAllSongsFromPlaylist(Long userId) {
        Optional<UserEntity> user = userRepo.findById(userId);

        if (user.isPresent()) {
            UserEntity userEntity = user.get();
            userEntity.setPlaylist(new ArrayList<>());
            userRepo.save(userEntity);
        }
    }
}
