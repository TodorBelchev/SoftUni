package blueOrigin;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class SpaceshipTests {

    private Spaceship spaceship;

    @Before
    public void setup() {
        this.spaceship = new Spaceship("Name", 5);
    }

    @Test
    public void testGetCount() {
        Assert.assertEquals(0, this.spaceship.getCount());
        addAstronauts();
        Assert.assertEquals(3, this.spaceship.getCount());
    }

    @Test
    public void testGetName() {
        Assert.assertEquals("Name", this.spaceship.getName());
    }

    @Test(expected = NullPointerException.class)
    public void testSetName() {
        this.spaceship = new Spaceship("", 5);
    }

    @Test
    public void testGetCapacity() {
        Assert.assertEquals(5, this.spaceship.getCapacity());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testSetCapacity() {
        this.spaceship = new Spaceship("Name", -1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddShouldThrow() {
        addAstronauts();
        Astronaut astronaut4 = new Astronaut("Stamat", 99);
        Astronaut astronaut5 = new Astronaut("Maria", 49);
        Astronaut astronaut6 = new Astronaut("Ivan", 49);
        this.spaceship.add(astronaut4);
        this.spaceship.add(astronaut5);
        this.spaceship.add(astronaut6);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddShouldThrowIfAstronautExists() {
        addAstronauts();
        Astronaut astronaut4 = new Astronaut("Stamat", 99);
        this.spaceship.add(astronaut4);
        this.spaceship.add(astronaut4);
    }

    @Test
    public void testRemove() {
        addAstronauts();
        boolean pesho = this.spaceship.remove("Pesho");
        Assert.assertTrue(pesho);
    }

    @Test
    public void testRemoveShouldReturnFalse() {
        addAstronauts();
        boolean pesho = this.spaceship.remove("Pesho0o0o");
        Assert.assertFalse(pesho);
    }

    private List<Astronaut> addAstronauts() {
        Astronaut astronaut1 = new Astronaut("Pesho", 99);
        Astronaut astronaut2 = new Astronaut("Gosho", 49);
        Astronaut astronaut3 = new Astronaut("Tosho", 77);

        this.spaceship.add(astronaut1);
        this.spaceship.add(astronaut2);
        this.spaceship.add(astronaut3);

        return List.of(
                astronaut1,
                astronaut2,
                astronaut3
        );
    }
}
