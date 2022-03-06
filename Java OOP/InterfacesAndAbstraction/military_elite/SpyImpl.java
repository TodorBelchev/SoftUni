package interfaces_and_abstraction.military_elite;

public class SpyImpl extends SoldierImpl implements Spy {
    private String codeNumber;

    public SpyImpl(int id, String firstName, String lastName, String codeNumber) {
        super(id, firstName, lastName);
        setCodeNumber(codeNumber);
    }

    public String getCodeNumber() {
        return codeNumber;
    }

    private void setCodeNumber(String codeNumber) {
        this.codeNumber = codeNumber;
    }

    @Override
    public String toString() {
        return String.format("Name: %s %s Id: %d%nCode Number: %s", getFirstName(), getLastName(), getId(), codeNumber);
    }
}
