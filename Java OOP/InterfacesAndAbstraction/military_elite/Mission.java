package interfaces_and_abstraction.military_elite;

public class Mission {
    private String codeName;
    private MissionState state;

    public Mission(String codeName, MissionState state) {
        setCodeName(codeName);
        setState(state);
    }

    public void completeMission() {
        setState(MissionState.finished);
    }

    public String getCodeName() {
        return codeName;
    }

    private void setCodeName(String codeName) {
        this.codeName = codeName;
    }

    public MissionState getState() {
        return state;
    }

    private void setState(MissionState state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return String.format("Code Name: %s State: %s", codeName, state);
    }
}
