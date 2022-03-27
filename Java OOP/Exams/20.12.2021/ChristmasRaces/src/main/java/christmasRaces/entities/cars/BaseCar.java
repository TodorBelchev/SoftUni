package christmasRaces.entities.cars;

import static christmasRaces.common.ExceptionMessages.INVALID_MODEL;

public abstract class BaseCar implements Car {
    private static final int NAME_MIN_LENGTH = 4;

    private String model;
    private int horsePower;
    private double cubicCentimeters;

    protected BaseCar(String model, int horsePower, double cubicCentimeters) {
        this.setModel(model);
        this.setHorsePower(horsePower);
        this.setCubicCentimeters(cubicCentimeters);
    }

    @Override
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        if (model == null || model.trim().length() < NAME_MIN_LENGTH) {
            throw new IllegalArgumentException(String.format(INVALID_MODEL, model, NAME_MIN_LENGTH));
        }

        this.model = model;
    }

    @Override
    public int getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    @Override
    public double getCubicCentimeters() {
        return cubicCentimeters;
    }

    public void setCubicCentimeters(double cubicCentimeters) {
        this.cubicCentimeters = cubicCentimeters;
    }

    @Override
    public double calculateRacePoints(int laps) {
        return this.cubicCentimeters / this.horsePower * laps;
    }
}
