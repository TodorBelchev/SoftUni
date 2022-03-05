package interfaces_and_abstraction.say_hello_extended;

public abstract class BasePerson implements Person {
    private String name;

    protected BasePerson(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }
}
