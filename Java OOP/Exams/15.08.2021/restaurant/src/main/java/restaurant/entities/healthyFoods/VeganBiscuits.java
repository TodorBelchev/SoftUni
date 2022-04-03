package restaurant.entities.healthyFoods;

public class VeganBiscuits extends Food {
    private static final double PORTION = 205;

    public VeganBiscuits(String name, double price) {
        super(name, PORTION, price);
    }
}
