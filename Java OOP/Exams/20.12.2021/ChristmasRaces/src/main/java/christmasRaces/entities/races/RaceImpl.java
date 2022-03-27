package christmasRaces.entities.races;

import christmasRaces.entities.drivers.Driver;

import java.util.ArrayList;
import java.util.Collection;

import static christmasRaces.common.ExceptionMessages.*;

public class RaceImpl implements Race {
    private static final int NAME_MIN_LENGTH = 5;
    private static final int RACE_MIN_LAPS = 1;

    private String name;
    private int laps;
    private Collection<Driver> drivers;

    public RaceImpl(String name, int laps) {
        this.setName(name);
        this.setLaps(laps);
        this.drivers = new ArrayList<>();
    }

    public void setName(String name) {
        if (name == null || name.trim().length() < NAME_MIN_LENGTH) {
            throw new IllegalArgumentException(String.format(INVALID_NAME, name, NAME_MIN_LENGTH));
        }

        this.name = name;
    }

    public void setLaps(int laps) {
        if (laps < RACE_MIN_LAPS) {
            throw new IllegalArgumentException(String.format(INVALID_NUMBER_OF_LAPS, RACE_MIN_LAPS));
        }

        this.laps = laps;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public int getLaps() {
        return this.laps;
    }

    @Override
    public Collection<Driver> getDrivers() {
        return this.drivers;
    }

    @Override
    public void addDriver(Driver driver) {
        if (driver == null) {
            throw new IllegalArgumentException(DRIVER_INVALID);
        }

        if (!driver.getCanParticipate()) {
            throw new IllegalArgumentException(String.format(DRIVER_NOT_PARTICIPATE, driver.getName()));
        }

        if (this.drivers.contains(driver)) {
            throw new IllegalArgumentException(String.format(DRIVER_ALREADY_ADDED, driver.getName(), this.name));
        }

        this.drivers.add(driver);
    }
}
