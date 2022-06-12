package com.example.BattleShips.service.impl;

import com.example.BattleShips.model.entity.ShipEntity;
import com.example.BattleShips.model.entity.UserEntity;
import com.example.BattleShips.model.service.ShipServiceModel;
import com.example.BattleShips.model.view.ShipViewModel;
import com.example.BattleShips.repository.ShipRepo;
import com.example.BattleShips.service.CategoryService;
import com.example.BattleShips.service.ShipService;
import com.example.BattleShips.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShipServiceImpl implements ShipService {
    private final ModelMapper modelMapper;
    private final UserService userService;
    private final CategoryService categoryService;
    private final ShipRepo shipRepo;


    public ShipServiceImpl(ModelMapper modelMapper, UserService userService, CategoryService categoryService, ShipRepo shipRepo) {
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.categoryService = categoryService;
        this.shipRepo = shipRepo;
    }

    @Override
    public ShipServiceModel add(ShipServiceModel shipServiceModel) {
        ShipEntity ship = modelMapper.map(shipServiceModel, ShipEntity.class);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            UserEntity user = userService.findByUsername(currentUserName);
            ship.setUser(user);
        }

        ship.setCategory(categoryService.findByCategoryNameEnum(shipServiceModel.getCategory()).get());

        shipRepo.save(ship);
        return modelMapper.map(ship, ShipServiceModel.class);
    }

    @Override
    public List<ShipViewModel> getByUsername(String currentPrincipalName) {
        return shipRepo.findByUserUsername(currentPrincipalName)
                .stream()
                .map(s -> modelMapper.map(s, ShipViewModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ShipViewModel> getOther(String currentPrincipalName) {
        return shipRepo.findByUserUsernameNotLike(currentPrincipalName)
                .stream()
                .map(s -> modelMapper.map(s, ShipViewModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public void attack(String attacker, String defender) {
        ShipEntity attackerEntity = shipRepo.getByName(attacker);
        ShipEntity defenderEntity = shipRepo.getByName(defender);
        long defenderRemainingHealth = defenderEntity.getHealth() - attackerEntity.getPower();
        if (defenderRemainingHealth <= 0) {
            shipRepo.delete(defenderEntity);
        } else {
            defenderEntity.setHealth(defenderRemainingHealth);
            shipRepo.save(defenderEntity);
        }
    }
}
