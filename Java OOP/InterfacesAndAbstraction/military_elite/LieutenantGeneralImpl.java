package interfaces_and_abstraction.military_elite;

import java.util.ArrayList;
import java.util.List;

public class LieutenantGeneralImpl extends PrivateImpl implements LieutenantGeneral{
    private List<Private> privates;

    public LieutenantGeneralImpl(int id, String firstName, String lastName, double salary) {
        super(id, firstName, lastName, salary);
        privates = new ArrayList<>();
    }

    public void addPrivate(Private priv) {
        privates.add(priv);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();

        builder.append(String.format(
                        "Name: %s %s Id: %d Salary: %.2f%n", getFirstName(), getLastName(), getId(), getSalary()))
                .append("Privates:");
        privates.stream().sorted((a, b) -> b.getId() - a.getId()).forEach(aPrivate -> {
            builder.append(String.format("%n  %s", aPrivate));
        });
        return builder.toString();
    }
}
