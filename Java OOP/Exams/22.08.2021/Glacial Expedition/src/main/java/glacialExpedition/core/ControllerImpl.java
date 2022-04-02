package glacialExpedition.core;

import glacialExpedition.models.explorers.AnimalExplorer;
import glacialExpedition.models.explorers.Explorer;
import glacialExpedition.models.explorers.GlacierExplorer;
import glacialExpedition.models.explorers.NaturalExplorer;
import glacialExpedition.models.mission.MissionImpl;
import glacialExpedition.models.states.State;
import glacialExpedition.models.states.StateImpl;
import glacialExpedition.repositories.ExplorerRepository;
import glacialExpedition.repositories.StateRepository;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static glacialExpedition.common.ConstantMessages.*;
import static glacialExpedition.common.ExceptionMessages.*;

public class ControllerImpl implements Controller {
    private ExplorerRepository explorers;
    private StateRepository states;
    private int exploredStatesCount;

    public ControllerImpl() {
        this.explorers = new ExplorerRepository();
        this.states = new StateRepository();
    }

    @Override
    public String addExplorer(String type, String explorerName) {
        Explorer explorer;
        switch (type) {
            case "NaturalExplorer":
                explorer = new NaturalExplorer(explorerName);
                break;
            case "GlacierExplorer":
                explorer = new GlacierExplorer(explorerName);
                break;
            case "AnimalExplorer":
                explorer = new AnimalExplorer(explorerName);
                break;
            default:
                throw new IllegalArgumentException(EXPLORER_INVALID_TYPE);
        }

        this.explorers.add(explorer);
        return String.format(EXPLORER_ADDED, type, explorerName);
    }

    @Override
    public String addState(String stateName, String... exhibits) {
        StateImpl state = new StateImpl(stateName);
        state.addExhibits(exhibits);
        this.states.add(state);
        return String.format(STATE_ADDED, stateName);
    }

    @Override
    public String retireExplorer(String explorerName) {
        Explorer explorer = this.explorers.byName(explorerName);
        if (explorer == null) {
            throw new IllegalArgumentException(String.format(EXPLORER_DOES_NOT_EXIST, explorerName));
        }

        this.explorers.remove(explorer);
        return String.format(EXPLORER_RETIRED, explorerName);
    }

    @Override
    public String exploreState(String stateName) {
        State state = this.states.byName(stateName);
        List<Explorer> explorers = this.explorers.getCollection().stream()
                .filter(e -> e.getEnergy() > 50)
                .collect(Collectors.toList());

        if (explorers.size() == 0) {
            throw new IllegalArgumentException(STATE_EXPLORERS_DOES_NOT_EXISTS);
        }

        MissionImpl mission = new MissionImpl();
        mission.explore(state, explorers);
        long retiredExplorers = explorers.stream().filter(e -> e.getEnergy() == 0).count();
        this.exploredStatesCount++;

        return String.format(STATE_EXPLORER, stateName, retiredExplorers);
    }

    @Override
    public String finalResult() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format(FINAL_STATE_EXPLORED, this.exploredStatesCount)).append(System.lineSeparator());
        sb.append(FINAL_EXPLORER_INFO).append(System.lineSeparator());

        this.explorers.getCollection().forEach(e -> {
            sb.append(String.format(FINAL_EXPLORER_NAME, e.getName())).append(System.lineSeparator());
            sb.append(String.format(FINAL_EXPLORER_ENERGY, e.getEnergy())).append(System.lineSeparator());
            Collection<String> exhibits = e.getSuitcase().getExhibits();
            String exhibitsString = exhibits.size() == 0 ? "None" : String.join(", ", e.getSuitcase().getExhibits());
            sb.append(String.format(FINAL_EXPLORER_SUITCASE_EXHIBITS, exhibitsString));
            sb.append(System.lineSeparator());
        });

        return sb.toString().trim();
    }
}
