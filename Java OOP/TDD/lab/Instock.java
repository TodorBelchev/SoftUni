package tdd.lab;

import java.util.*;
import java.util.stream.Collectors;

public class Instock implements ProductStock {

    Map<String, Product> products;

    public Instock() {
        this.products = new LinkedHashMap<>();
    }

    @Override
    public int getCount() {
        return this.products.size();
    }

    @Override
    public boolean contains(Product product) {
        return this.products.containsKey(product.getLabel());
    }

    @Override
    public void add(Product product) {
        this.products.putIfAbsent(product.getLabel(), product);
    }

    @Override
    public void changeQuantity(String product, int quantity) {
        if (!this.products.containsKey(product)) {
            throw new IllegalArgumentException();
        }

        this.products.get(product).setQuantity(quantity);
    }

    @Override
    public Product find(int index) {
        if (index < 0 || index > this.products.size()) {
            throw new IndexOutOfBoundsException();
        }

        return new ArrayList<>(this.products.values()).get(index);
    }

    @Override
    public Product findByLabel(String label) {
        if (!this.products.containsKey(label)) {
            throw new IllegalArgumentException();
        }

        return this.products.get(label);
    }

    @Override
    public Iterable<Product> findFirstByAlphabeticalOrder(int count) {
        if (count <= 0 || count > this.products.size()) {
            return new ArrayList<>();
        }

        return this.products
                .values()
                .stream()
                .limit(count)
                .sorted(Comparator.comparing(Product::getLabel))
                .collect(Collectors.toList());
    }

    @Override
    public Iterable<Product> findAllInRange(double lo, double hi) {
        return this.products.values().stream()
                .filter(p -> p.getPrice() > lo && p.getPrice() <= hi)
                .sorted((p1, p2) -> Double.compare(p2.getPrice(), p1.getPrice()))
                .collect(Collectors.toList());
    }

    @Override
    public Iterable<Product> findAllByPrice(double price) {
        return this.products.values().stream()
                .filter(p -> p.getPrice() == price)
                .collect(Collectors.toList());
    }

    @Override
    public Iterable<Product> findFirstMostExpensiveProducts(int count) {
        if (count > this.products.size()) {
            throw new IllegalArgumentException();
        }

        return this.products.values().stream()
                .sorted((p1, p2) -> Double.compare(p2.getPrice(), p1.getPrice()))
                .limit(count)
                .collect(Collectors.toList());

    }

    @Override
    public Iterable<Product> findAllByQuantity(int quantity) {
        return this.products.values().stream()
                .filter(p -> p.getQuantity() == quantity)
                .collect(Collectors.toList());
    }

    @Override
    public Iterator<Product> iterator() {
        return this.products.values().iterator();
    }
}
