package Classes.CarSalesman;

public class Engine {
    private String model;
    private int power;
    private int displacement;
    private String efficiency;

    public Engine(String model, int power) {
        this.model = model;
        this.power = power;
        this.efficiency = "n/a";
        this.displacement = 0;
    }

    public Engine(String model, int power, int displacement, String efficiency) {
        this(model, power);
        this.displacement = displacement;
        this.efficiency = efficiency;
    }

    public Engine(String model, int power, int displacement) {
        this(model, power);
        this.displacement = displacement;
    }

    public Engine(String model, int power, String efficiency) {
        this(model, power);
        this.efficiency = efficiency;
    }

    @Override
    public String toString() {
        String displacementString;
        if (this.displacement == 0) {
            displacementString = "n/a";
        } else {
            displacementString = this.displacement + "";
        }
        return String.format("%s:%n" +
                "Power: %d%n" +
                "Displacement: %s%n" +
                "Efficiency: %s", this.model, this.power, displacementString, this.efficiency);
    }
}
