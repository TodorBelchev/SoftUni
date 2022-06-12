package com.example.BattleShips.repository;

import com.example.BattleShips.model.entity.UserEntity;
import net.bytebuddy.jar.asm.commons.Remapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);

    Optional<UserEntity> findByUsernameAndPassword(String username, String password);
}
