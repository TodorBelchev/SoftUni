package spaceStation.core;

import spaceStation.models.astronauts.Astronaut;
import spaceStation.models.astronauts.Biologist;
import spaceStation.models.astronauts.Geodesist;
import spaceStation.models.astronauts.Meteorologist;
import spaceStation.models.mission.Mission;
import spaceStation.models.mission.MissionImpl;
import spaceStation.models.planets.Planet;
import spaceStation.models.planets.PlanetImpl;
import spaceStation.repositories.AstronautRepository;
import spaceStation.repositories.PlanetRepository;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static spaceStation.common.ConstantMessages.*;
import static spaceStation.common.ExceptionMessages.*;

public class ControllerImpl implements Controller {
    private static final int MIN_OXYGEN = 60;
    private AstronautRepository astronautRepository;
    private PlanetRepository planetRepository;
    private int exploredPlanetsCount = 0;

    public ControllerImpl() {
        this.astronautRepository = new AstronautRepository();
        this.planetRepository = new PlanetRepository();
    }

    @Override
    public String addAstronaut(String type, String astronautName) {
        Astronaut astronaut = null;
        switch (type) {
            case "Biologist":
                astronaut = new Biologist(astronautName);
                break;
            case "Geodesist":
                astronaut = new Geodesist(astronautName);
                break;
            case "Meteorologist":
                astronaut = new Meteorologist(astronautName);
                break;
            default:
                throw new IllegalArgumentException(ASTRONAUT_INVALID_TYPE);
        }

        this.astronautRepository.add(astronaut);
        return String.format(ASTRONAUT_ADDED, type, astronautName);
    }

    @Override
    public String addPlanet(String planetName, String... items) {
        PlanetImpl planet = new PlanetImpl(planetName);
        planet.addItems(items);
        this.planetRepository.add(planet);
        return String.format(PLANET_ADDED, planetName);
    }

    @Override
    public String retireAstronaut(String astronautName) {
        Astronaut astronaut = this.astronautRepository.findByName(astronautName);

        if (astronaut == null) {
            throw new IllegalArgumentException(String.format(ASTRONAUT_DOES_NOT_EXIST, astronautName));
        }

        this.astronautRepository.remove(astronaut);
        return String.format(ASTRONAUT_RETIRED, astronautName);
    }

    @Override
    public String explorePlanet(String planetName) {
        Planet planet = this.planetRepository.findByName(planetName);
        Mission mission = new MissionImpl();
        List<Astronaut> compatibleAstronauts = this.astronautRepository.getModels().stream()
                .filter(a -> a.getOxygen() > MIN_OXYGEN)
                .collect(Collectors.toList());

        if (compatibleAstronauts.size() == 0) {
            throw new IllegalArgumentException(PLANET_ASTRONAUTS_DOES_NOT_EXISTS);
        }

        mission.explore(planet, compatibleAstronauts);
        long retiredExplorers = compatibleAstronauts.stream().filter(e -> e.getOxygen() == 0).count();
        exploredPlanetsCount++;
        return String.format(PLANET_EXPLORED, planetName, retiredExplorers);
    }

    @Override
    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format(REPORT_PLANET_EXPLORED, exploredPlanetsCount)).append(System.lineSeparator());
        sb.append(REPORT_ASTRONAUT_INFO).append(System.lineSeparator());
        this.astronautRepository.getModels().forEach(a -> {
            sb.append(String.format(REPORT_ASTRONAUT_NAME, a.getName())).append(System.lineSeparator());
            sb.append(String.format(REPORT_ASTRONAUT_OXYGEN, a.getOxygen())).append(System.lineSeparator());
            Collection<String> items = a.getBag().getItems();
            String itemsString = items.size() == 0
                    ? "none"
                    : String.join(REPORT_ASTRONAUT_BAG_ITEMS_DELIMITER, a.getBag().getItems());
            sb.append(String.format(REPORT_ASTRONAUT_BAG_ITEMS, itemsString)).append(System.lineSeparator());
        });

        return sb.toString().trim();
    }
}
