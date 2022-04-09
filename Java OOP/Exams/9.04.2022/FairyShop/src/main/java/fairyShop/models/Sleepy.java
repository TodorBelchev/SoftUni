package fairyShop.models;

public class Sleepy extends BaseHelper {
    private static final int ENERGY = 50;

    public Sleepy(String name) {
        super(name, ENERGY);
    }

    @Override
    public void work() {
        super.setEnergy(super.getEnergy() - 15);
    }
}
