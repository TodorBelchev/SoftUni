package interfaces_and_abstraction.military_elite;

import java.util.Collection;

public interface Commando extends SpecialisedSoldier{
    void addMission(Mission mission);
    Collection<Mission> getMissions();
}
