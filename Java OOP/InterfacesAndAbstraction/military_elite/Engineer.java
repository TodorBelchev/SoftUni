package interfaces_and_abstraction.military_elite;

import java.util.Collection;

public interface Engineer extends SpecialisedSoldier {
    void addRepair(Repair repair);
    Collection<Repair> getRepairs();
}
