package encapsulation.shopping_spree;

public class Product {
    private String name;
    private double cost;

    public Product(String name, double cost) {
        setName(name);
        setCost(cost);
    }

    public String getName() {
        return name;
    }

    public double getCost() {
        return cost;
    }

    private void setName(String name) {
        Utils.ensureName(name);
        this.name = name;
    }

    private void setCost(double cost) {
        Utils.ensureMoney(cost);
        this.cost = cost;
    }
}
