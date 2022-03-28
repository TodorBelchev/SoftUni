package catHouse.entities.cat;

public class LonghairCat extends BaseCat {
    private static final int KILOGRAMS = 9;
    private static final int FOOD_EATEN = 3;

    public LonghairCat(String name, String breed, double price) {
        super(name, breed, price);
        super.setKilograms(KILOGRAMS);
    }

    @Override
    public void eating() {
        super.setKilograms(super.getKilograms() + FOOD_EATEN);
    }
}
