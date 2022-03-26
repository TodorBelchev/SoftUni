package viceCity.core;

import viceCity.core.interfaces.Controller;
import viceCity.models.guns.Gun;
import viceCity.models.guns.Pistol;
import viceCity.models.guns.Rifle;
import viceCity.models.neighbourhood.GangNeighbourhood;
import viceCity.models.neighbourhood.Neighbourhood;
import viceCity.models.players.CivilPlayer;
import viceCity.models.players.MainPlayer;
import viceCity.models.players.Player;

import java.util.ArrayDeque;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static viceCity.common.ConstantMessages.*;

public class ControllerImpl implements Controller {
    private Player mainPlayer;
    private ArrayDeque<Gun> guns;
    private Neighbourhood neighbourhood;
    private Map<String, Player> players;

    public ControllerImpl() {
        this.mainPlayer = new MainPlayer();
        this.guns = new ArrayDeque<>();
        this.neighbourhood = new GangNeighbourhood();
        this.players = new LinkedHashMap<>();
    }

    @Override
    public String addPlayer(String name) {
        Player player = new CivilPlayer(name);
        this.players.putIfAbsent(player.getName(), player);

        return String.format(PLAYER_ADDED, name);
    }

    @Override
    public String addGun(String type, String name) {
        Gun gun;

        switch (type) {
            case "Pistol":
                gun = new Pistol(name);
                break;
            case "Rifle":
                gun = new Rifle(name);
                break;
            default:
                return GUN_TYPE_INVALID;
        }

        this.guns.add(gun);

        return String.format(GUN_ADDED, name, type);
    }

    @Override
    public String addGunToPlayer(String name) {
        Gun gun = this.guns.poll();

        if (gun == null) {
            return GUN_QUEUE_IS_EMPTY;
        }

        if (name.equals("Vercetti")) {
            this.mainPlayer.getGunRepository().add(gun);
            return String.format(GUN_ADDED_TO_MAIN_PLAYER, gun.getName(), mainPlayer.getName());
        }

        Player player = this.players.get(name);

        if (player == null) {
            this.guns.add(gun);
            return CIVIL_PLAYER_DOES_NOT_EXIST;
        }

        player.getGunRepository().add(gun);

        return String.format(GUN_ADDED_TO_CIVIL_PLAYER, gun.getName(), player.getName());
    }

    @Override
    public String fight() {
        this.neighbourhood.action(mainPlayer, players.values());

        if (this.mainPlayer.getLifePoints() == 100 && this.players
                .values()
                .stream()
                .allMatch(player -> player.getLifePoints() == 50)) {

            return FIGHT_HOT_HAPPENED;
        }

        List<Player> deadPlayers = this.players
                .values()
                .stream()
                .filter(player -> !player.isAlive())
                .collect(Collectors.toList());

        StringBuilder message = new StringBuilder(FIGHT_HAPPENED);

        message.append(System.lineSeparator())
                .append(String.format(MAIN_PLAYER_LIVE_POINTS_MESSAGE, mainPlayer.getLifePoints()))
                .append(System.lineSeparator())
                .append(String.format(MAIN_PLAYER_KILLED_CIVIL_PLAYERS_MESSAGE, deadPlayers.size()))
                .append(System.lineSeparator())
                .append(String.format(CIVIL_PLAYERS_LEFT_MESSAGE, players.size() - deadPlayers.size()));

        for (Player player : deadPlayers) {
            players.remove(player.getName());
        }

        return message.toString().trim();
    }
}
