package farmville;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class FarmvilleTests {
    private Farm farm;

    @Before
    public void setup() {
        this.farm = new Farm("Farm", 3);
    }

    @Test
    public void getCount() {
        Assert.assertEquals(0, this.farm.getCount());
        addAnimals();
        Assert.assertEquals(3, this.farm.getCount());
    }

    @Test
    public void getName() {
        Assert.assertEquals("Farm", this.farm.getName());
    }

    @Test(expected = IllegalArgumentException.class)
    public void setCapacityShouldThrow() {
        this.farm = new Farm("Farm", -1);
    }

    @Test(expected = NullPointerException.class)
    public void setNameShouldThrow() {
        this.farm = new Farm("", 3);
    }

    @Test
    public void getCapacity() {
        Assert.assertEquals(3, this.farm.getCapacity());
    }

    @Test(expected = IllegalArgumentException.class)
    public void addShouldThrowWithFullCapacity() {
        addAnimals();
        this.farm.add(new Animal("Pesho", 9999999));
    }

    @Test(expected = IllegalArgumentException.class)
    public void addShouldThrowWithDuplicateAnimal() {
        Animal monster = new Animal("Pesho", 9999999);
        this.farm.add(monster);
        this.farm.add(monster);
    }

    @Test
    public void remove() {
        addAnimals();
        boolean isRemoved = this.farm.remove("Dog");
        Assert.assertTrue(isRemoved);
        boolean isRemoved2 = this.farm.remove("Pesho");
        Assert.assertFalse(isRemoved2);
    }

    private List<Animal> addAnimals() {
        Animal animal1 = new Animal("Dog", 80);
        Animal animal2 = new Animal("Cat", 50);
        Animal animal3 = new Animal("Mouse", 100);

        this.farm.add(animal1);
        this.farm.add(animal2);
        this.farm.add(animal3);

        return List.of(
                animal1,
                animal2,
                animal3
        );
    }
}
