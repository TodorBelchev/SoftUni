package restaurant.entities.healthyFoods;

public class Salad extends Food{
    private static final double PORTION = 150;

    public Salad(String name, double price) {
        super(name, PORTION, price);
    }
}
