package encapsulation.shopping_spree;

public class Utils {
    public static void ensureName(String name) {
        if (name.trim().length() <= 0) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }

    public static void ensureMoney(double money) {
        if (money < 0) {
            throw new IllegalArgumentException("Money cannot be negative");
        }
    }
}
