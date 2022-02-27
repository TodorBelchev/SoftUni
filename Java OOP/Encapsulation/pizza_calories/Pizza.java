package encapsulation.pizza_calories;

import java.util.ArrayList;
import java.util.List;

public class Pizza {
    private String name;
    private Dough dough;
    private List<Topping> toppings;


    public Pizza(String name, int toppingsCount) {
        this.setName(name);
        this.setToppings(toppingsCount);
    }

    public String getName() {
        return name;
    }

    public Dough getDough() {
        return dough;
    }

    public void setDough(Dough dough) {
        this.dough = dough;
    }

    public List<Topping> getToppings() {
        return toppings;
    }

    public void setToppings(int toppingsCount) {
        if (toppingsCount < 0 || toppingsCount > 10) {
            throw new IllegalArgumentException("Number of toppings should be in range [0..10].");
        }

        this.toppings = new ArrayList<>(toppingsCount);
    }

    private void setName(String name) {
        if (name == null || name.trim().equals("") || name.length() > 15) {
            throw new IllegalArgumentException("Pizza name should be between 1 and 15 symbols.");
        }

        this.name = name;
    }


    public void addTopping(Topping topping) {
        if (this.toppings.size() == 10) {
            throw new IllegalArgumentException("Number of toppings should be in range [0..10].");
        }

        this.toppings.add(topping);
    }

    public double getOverallCalories() {
        double doughCalories = this.dough.calculateCalories();
        double toppingCalories = this.toppings.stream().mapToDouble(Topping::calculateCalories).sum();
        return doughCalories + toppingCalories;
    }

    @Override
    public String toString() {
        return String.format("%s - %.2f", this.getName(), this.getOverallCalories());
    }
}
