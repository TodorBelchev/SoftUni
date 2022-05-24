package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.User;
import com.softuni.Mobilelele.model.entity.UserRole;
import com.softuni.Mobilelele.model.enums.UserRoleEnum;
import com.softuni.Mobilelele.model.service.UserLoginServiceModel;
import com.softuni.Mobilelele.repository.UserRepository;
import com.softuni.Mobilelele.repository.UserRoleRepository;
import com.softuni.Mobilelele.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final String defaultPassword;
    private final UserDetailsService userDetailsService;

    public UserServiceImpl(
            UserRepository userRepository,
            UserRoleRepository userRoleRepository,
            PasswordEncoder passwordEncoder,
            @Value("${app.default.password}") String defaultPassword,
            UserDetailsService userDetailsService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.defaultPassword = defaultPassword;
        this.userRoleRepository = userRoleRepository;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void login(UserLoginServiceModel serviceModel) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(serviceModel.getUsername());
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                userDetails,
                userDetails.getPassword(),
                userDetails.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    @Override
    public void initUsers() {
        if (userRepository.count() != 0) {
            return;
        }

        User admin = new User();
        UserRole adminUserRole = userRoleRepository.findByRole(UserRoleEnum.Admin);
        admin.setRole(adminUserRole);
        admin.setFirstName("John");
        admin.setLastName("Doe");
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode(defaultPassword));

        User regular = new User();
        UserRole regularUserRole = userRoleRepository.findByRole(UserRoleEnum.User);
        regular.setRole(regularUserRole);
        regular.setFirstName("Jane");
        regular.setLastName("Doe");
        regular.setUsername("user");
        regular.setPassword(passwordEncoder.encode(defaultPassword));

        userRepository.saveAll(List.of(admin, regular));
    }
}
