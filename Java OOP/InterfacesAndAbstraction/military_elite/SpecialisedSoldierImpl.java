package interfaces_and_abstraction.military_elite;

public class SpecialisedSoldierImpl extends PrivateImpl implements SpecialisedSoldier {
    private Corps corps;

    public SpecialisedSoldierImpl(int id, String firstName, String lastName, double salary, Corps corps) {
        super(id, firstName, lastName, salary);
        setCorps(corps);
    }

    public Corps getCorps() {
        return corps;
    }

    private void setCorps(Corps corps) {
        this.corps = corps;
    }
}
