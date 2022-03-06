package interfaces_and_abstraction.military_elite;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class CommandoImpl extends SpecialisedSoldierImpl implements Commando {
    private List<Mission> missions;

    public CommandoImpl(int id, String firstName, String lastName, double salary, Corps corps) {
        super(id, firstName, lastName, salary, corps);
        missions = new ArrayList<>();
    }

    public void addMission(Mission mission) {
        missions.add(mission);
    }

    public Collection<Mission> getMissions() {
        return Collections.unmodifiableCollection(missions);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();

        builder.append(String.format(
                        "Name: %s %s Id: %d Salary: %.2f%n", getFirstName(), getLastName(), getId(), getSalary()))
                .append(String.format("Corps: %s%n", getCorps()))
                .append("Missions:");
        missions.forEach(aMission -> {
            builder.append(String.format("%n  %s", aMission));
        });
        return builder.toString();
    }
}
