package inheritance.restaurant;

import java.math.BigDecimal;

public class Cake extends Dessert {
    static final double CAKE_GRAMS = 250;
    static final double CAKE_CALORIES = 1000;
    static final BigDecimal CAKE_PRICE = new BigDecimal(5);

    public Cake(String name) {
        super(name, CAKE_PRICE, CAKE_GRAMS, CAKE_CALORIES);
    }
}
