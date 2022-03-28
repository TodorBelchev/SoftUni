package cats;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Collection;
import java.util.List;

public class HouseTests {
    private House house;

    @Before
    public void setup() {
        this.house = new House("House", 3);
    }

    @Test
    public void testTestGetName() {
        Assert.assertEquals("House", this.house.getName());
    }

    @Test(expected = NullPointerException.class)
    public void setNameShouldThrow() {
        this.house = new House(null, 11);
    }

    @Test(expected = IllegalArgumentException.class)
    public void setCapacityShouldThrow() {
        this.house = new House("House", -1);
    }

    @Test
    public void testGetCapacity() {
        Assert.assertEquals(3, this.house.getCapacity());
    }

    @Test
    public void testGetCount() {
        addCats();
        Assert.assertEquals(3, this.house.getCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddCatShouldThrow() {
        addCats();
        this.house.addCat(new Cat("Stamat"));
    }

    @Test
    public void testRemoveCat() {
        addCats();
        this.house.removeCat("Pesho");
        Assert.assertEquals(2, this.house.getCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testRemoveCatShouldThrow() {
        this.house.removeCat("Pesho");
    }

    @Test
    public void testCatForSale() {
        addCats();
        Cat cat = this.house.catForSale("Pesho");
        Assert.assertFalse(cat.isHungry());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCatForSaleShouldThrow() {
        Cat cat = this.house.catForSale("Pesho");
    }

    @Test
    public void testStatistics() {
        addCats();
        String statistics = this.house.statistics();
        String expected = "The cat Pesho, Gosho, Tosho is in the house House!";
        Assert.assertEquals(expected, statistics);
    }

    private Collection<Cat> addCats() {
        Cat cat1 = new Cat("Pesho");
        Cat cat2 = new Cat("Gosho");
        Cat cat3 = new Cat("Tosho");

        this.house.addCat(cat1);
        this.house.addCat(cat2);
        this.house.addCat(cat3);

        return List.of(cat1, cat2, cat3);
    }
}
