package com.example.BattleShips.service;

import com.example.BattleShips.model.service.ShipServiceModel;
import com.example.BattleShips.model.view.ShipViewModel;

import java.util.List;

public interface ShipService {
    ShipServiceModel add(ShipServiceModel shipServiceModel);

    List<ShipViewModel> getByUsername(String currentPrincipalName);

    List<ShipViewModel> getOther(String currentPrincipalName);

    void attack(String attacker, String defender);
}
