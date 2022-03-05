package interfaces_and_abstraction.say_hello_extended;

public class European extends BasePerson {
    protected European(String name) {
        super(name);
    }

    @Override
    public String sayHello() {
        return "Hello";
    }
}
