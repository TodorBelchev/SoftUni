package encapsulation.shopping_spree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Person {
    private String name;
    private double money;
    private List<Product> products;

    public Person(String name, double money) {
        setName(name);
        setMoney(money);
        this.products = new ArrayList<>();
    }

    private void setName(String name) {
        Utils.ensureName(name);
        this.name = name;
    }

    private void setMoney(double money) {
        Utils.ensureMoney(money);
        this.money = money;
    }

    public String getName() {
        return name;
    }

    public List<Product> getProducts() {
        return Collections.unmodifiableList(this.products);
    }

    public void buyProduct(Product product) {
        if (product.getCost() > this.money) {
            throw new IllegalArgumentException(String.format("%s can't afford %s", this.name, product.getName()));
        }

        this.money -= product.getCost();
        this.products.add(product);
    }
}
