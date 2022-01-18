package Classes.CarSalesman;

public class Car {
    private String model;
    private Engine engine;
    private int weight;
    private String color;

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
        this.color = "n/a";
        this.weight = 0;
    }

    public Car(String model, Engine engine, int weight) {
        this(model, engine);
        this.weight = weight;
    }

    public Car(String model, Engine engine, String color) {
        this(model, engine);
        this.color = color;
    }

    public Car(String model, Engine engine, int weight, String color) {
        this(model, engine);
        this.weight = weight;
        this.color = color;
    }

    @Override
    public String toString() {
        String weightString = "";
        if (this.weight == 0) {
            weightString = "n/a";
        } else {
            weightString = this.weight + "";
        }
        return String.format("%s:%n" +
                "%s%n" +
                "Weight: %s%n" +
                "Color: %s", this.model, this.engine.toString(), weightString, this.color);
    }
}
