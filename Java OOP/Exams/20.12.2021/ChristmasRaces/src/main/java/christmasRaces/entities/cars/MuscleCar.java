package christmasRaces.entities.cars;

import static christmasRaces.common.ExceptionMessages.INVALID_HORSE_POWER;

public class MuscleCar extends BaseCar {
    private static final double CUBIC_CENTIMETERS = 5000;
    private static final double MIN_HORSEPOWER = 400;
    private static final double MAX_HORSEPOWER = 600;

    public MuscleCar(String model, int horsePower) {
        super(model, horsePower, CUBIC_CENTIMETERS);
    }

    @Override
    public void setHorsePower(int horsePower) {
        if (horsePower < MIN_HORSEPOWER || horsePower > MAX_HORSEPOWER) {
            throw new IllegalArgumentException(String.format(INVALID_HORSE_POWER, horsePower));
        }

        super.setHorsePower(horsePower);
    }
}
