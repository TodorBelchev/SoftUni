package inheritance.restaurant;

import java.math.BigDecimal;

public class Coffee extends HotBeverage {
    static final double COFFEE_MILLILITERS = 50;
    static final BigDecimal COFFEE_PRICE = new BigDecimal(3.5);
    private double caffeine;

    public Coffee(String name, double caffeine) {
        super(name, COFFEE_PRICE, COFFEE_MILLILITERS);
        this.caffeine = caffeine;
    }

    public double getCaffeine() {
        return caffeine;
    }
}
