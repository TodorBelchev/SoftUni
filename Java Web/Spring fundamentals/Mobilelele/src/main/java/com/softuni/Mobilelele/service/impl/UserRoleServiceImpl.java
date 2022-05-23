package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.UserRole;
import com.softuni.Mobilelele.model.enums.UserRoleEnum;
import com.softuni.Mobilelele.repository.UserRoleRepository;
import com.softuni.Mobilelele.service.UserRoleService;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserRoleServiceImpl implements UserRoleService {

    private final UserRoleRepository userRoleRepository;

    public UserRoleServiceImpl(UserRoleRepository userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }

    @Override
    public void initRoles() {
        if (userRoleRepository.count() != 0) {
            return;
        }

        Arrays.stream(UserRoleEnum.values())
                .forEach(userRoleEnum -> {
                    UserRole userRole = new UserRole();
                    userRole.setRole(userRoleEnum);

                    this.userRoleRepository.save(userRole);
                });
    }
}
