package christmasRaces.entities.drivers;

import christmasRaces.entities.cars.Car;

import static christmasRaces.common.ExceptionMessages.CAR_INVALID;
import static christmasRaces.common.ExceptionMessages.INVALID_NAME;

public class DriverImpl implements Driver {
    private static final int NAME_MIN_LENGTH = 5;

    private String name;
    private Car car;
    private int numberOfWins;
    private boolean canParticipate;

    public DriverImpl(String name) {
        this.setName(name);
    }

    public void setName(String name) {
        if (name == null || name.trim().length() < NAME_MIN_LENGTH) {
            throw new IllegalArgumentException(String.format(INVALID_NAME, name, NAME_MIN_LENGTH));
        }

        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public Car getCar() {
        return this.car;
    }

    @Override
    public int getNumberOfWins() {
        return this.numberOfWins;
    }

    @Override
    public void addCar(Car car) {
        if (car == null) {
            throw new IllegalArgumentException(CAR_INVALID);
        }

        this.car = car;
    }

    @Override
    public void winRace() {
        this.numberOfWins++;
    }

    @Override
    public boolean getCanParticipate() {
        return this.car != null;
    }
}
