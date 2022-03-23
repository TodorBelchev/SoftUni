package tdd.lab;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static org.junit.Assert.*;

public class InstockTest {


    private Instock stock;

    @Before
    public void setup() {
        this.stock = new Instock();
    }

    @Test
    public void getCount() {
        assertEquals(0, this.stock.getCount());
        this.stock.add(new Product("Coffee", 0.99, 10));
        assertEquals(1, this.stock.getCount());
    }

    @Test
    public void containsShouldReturnFalse() {
        Product product = new Product("Coffee", 0.99, 10);
        assertFalse(this.stock.contains(product));
    }

    @Test
    public void containsShouldReturnTrueWhenAdded() {
        Product product = new Product("Coffee", 0.99, 10);
        this.stock.add(product);
        assertTrue(this.stock.contains(product));
    }

    @Test(expected = IllegalArgumentException.class)
    public void changeQuantityShouldThrowForMissingProduct() {
        this.stock.changeQuantity("Coffee", 2);
    }

    @Test()
    public void changeQuantityShouldSetNewQuantity() {
        addTestProducts();
        this.stock.changeQuantity("Coffee", 2);
        Product product = this.stock.find(0);
        assertEquals(2, product.getQuantity());
    }

    @Test(expected = IndexOutOfBoundsException.class)
    public void findShouldThrowWithMinusOne() {
        this.stock.find(-1);
    }

    @Test(expected = IndexOutOfBoundsException.class)
    public void findShouldThrowWithIndexBiggerThanLength() {
        this.stock.find(2);
    }

    @Test()
    public void findShouldReturnCorrectProduct() {
        addTestProducts();
        Product product = this.stock.find(2);
        assertEquals("Mango", product.getLabel());
        Product product1 = this.stock.find(0);
        assertEquals("Coffee", product1.getLabel());
    }

    @Test(expected = IllegalArgumentException.class)
    public void findByLabelShouldThrowForMissingProduct() {
        this.stock.findByLabel("Coffee");
    }

    @Test
    public void findByLabel() {
        addTestProducts();
        Product coffee = this.stock.findByLabel("Coffee");
        assertNotNull(coffee);
    }

    @Test
    public void findFirstByAlphabeticalOrder() {
        Product[] products = addTestProducts();
        List<Product> firstByAlphabeticalOrder = (List<Product>) this.stock.findFirstByAlphabeticalOrder(2);
        List<Product> expected = List.of(
                products[1],
                products[0]
        );

        assertEquals(expected, firstByAlphabeticalOrder);
    }

    @Test
    public void findFirstByAlphabeticalOrderShouldReturnEmptyList() {
        List<Product> firstByAlphabeticalOrder = (List<Product>) this.stock.findFirstByAlphabeticalOrder(0);
        assertEquals(0, firstByAlphabeticalOrder.size());
    }

    @Test
    public void findAllInRange() {
        Product[] products = addTestProducts();
        List<Product> productsInRange = (List<Product>) this.stock.findAllInRange(0.5, 1.5);
        List<Product> expected = List.of(
                products[0],
                products[1]
        );

        assertEquals(expected, productsInRange);
    }

    @Test
    public void findAllInRangeShouldReturnEmptyList() {
        List<Product> productsInRange = (List<Product>) this.stock.findAllInRange(0.5, 1.5);
        assertEquals(0, productsInRange.size());
    }

    @Test
    public void findAllByPrice() {
        Product[] products = addTestProducts();
        List<Product> productsByPrice = (List<Product>) this.stock.findAllByPrice(0.99);
        List<Product> expected = List.of(products[0]);

        assertEquals(expected, productsByPrice);
    }

    @Test
    public void findAllByPriceShouldReturnEmptyList() {
        List<Product> productsByPrice = (List<Product>) this.stock.findAllByPrice(0.99);
        assertEquals(0, productsByPrice.size());
    }

    @Test
    public void findFirstMostExpensiveProducts() {
        Product[] products = addTestProducts();
        List<Product> productsByPrice = (List<Product>) this.stock.findFirstMostExpensiveProducts(2);
        List<Product> expected = List.of(
                products[2],
                products[0]
        );

        assertEquals(expected, productsByPrice);
    }

    @Test(expected = IllegalArgumentException.class)
    public void findFirstMostExpensiveProductsShouldThrowIfCountIsBiggerThanSize() {
        this.stock.findFirstMostExpensiveProducts(2);
    }

    @Test
    public void findAllByQuantity() {
        Product[] products = addTestProducts();
        List<Product> productsByPrice = (List<Product>) this.stock.findAllByQuantity(10);
        List<Product> expected = List.of(
                products[0],
                products[1],
                products[2]
        );

        assertEquals(expected, productsByPrice);
    }

    @Test
    public void findAllByQuantityShouldReturnEmptyList() {
        List<Product> productsByPrice = (List<Product>) this.stock.findAllByQuantity(10);
        assertEquals(0, productsByPrice.size());
    }

    @Test
    public void iterator() {
        Product[] products = addTestProducts();

        Iterator<Product> iterator = this.stock.iterator();
        assertNotNull(iterator);

        List<Product> actualProducts = new ArrayList<>();

        while (iterator.hasNext()) {
            Product p = iterator.next();
            actualProducts.add(p);
        }

        assertEquals(List.of(products), actualProducts);
    }

    private Product[] addTestProducts() {
        Product product = new Product("Coffee", 0.99, 10);
        Product product1 = new Product("Banana", 0.89, 10);
        Product product2 = new Product("Mango", 1.99, 10);

        this.stock.add(product);
        this.stock.add(product1);
        this.stock.add(product2);

        return new Product[]{
                product,
                product1,
                product2
        };
    }
}