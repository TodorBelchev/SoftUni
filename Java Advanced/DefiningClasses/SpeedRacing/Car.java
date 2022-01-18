package Classes.SpeedRacing;

public class Car {
    private String model;
    private double fuelAmount;
    private double consumption;
    private int mileage;

    public Car(String model, double fuelAmount, double consumption) {
        this.model = model;
        this.fuelAmount = fuelAmount;
        this.consumption = consumption;
        this.mileage = 0;
    }

    public boolean drive(int distance) {
        double requiredFuel = distance * this.consumption;
        if (requiredFuel > this.fuelAmount) {
            return false;
        } else {
            this.mileage += distance;
            this.fuelAmount -= requiredFuel;
            return true;
        }
    }

    @Override
    public String toString() {
        return String.format("%s %.2f %d", this.model, this.fuelAmount, this.mileage);
    }
}
