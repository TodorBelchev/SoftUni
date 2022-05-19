package com.softuni.Mobilelele.repository;

import com.softuni.Mobilelele.model.entity.UserRole;
import com.softuni.Mobilelele.model.enums.UserRoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    UserRole findByName(UserRoleEnum name);
}
