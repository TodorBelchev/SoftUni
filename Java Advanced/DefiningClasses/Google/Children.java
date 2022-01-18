package Classes.Google;

public class Children {
    private String name;
    private String birthDate;

    public Children(String name, String birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }

    @Override
    public String toString() {
        return String.format("%s %s", this.name, this.birthDate);
    }
}
