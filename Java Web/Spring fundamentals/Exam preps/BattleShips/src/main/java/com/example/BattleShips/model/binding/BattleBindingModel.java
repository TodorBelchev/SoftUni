package com.example.BattleShips.model.binding;

import javax.validation.constraints.NotNull;

public class BattleBindingModel {

    @NotNull
    private String attackerName;

    @NotNull
    private String defenderName;

    public String getAttackerName() {
        return attackerName;
    }

    public void setAttackerName(String attackerName) {
        this.attackerName = attackerName;
    }

    public String getDefenderName() {
        return defenderName;
    }

    public void setDefenderName(String defenderName) {
        this.defenderName = defenderName;
    }
}
