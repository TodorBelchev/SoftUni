package garage;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class GarageTests {
    private Garage garage;

    @Before
    public void setup() {
        this.garage = new Garage();
    }

    @Test
    public void testGetCars() {
        Assert.assertEquals(0, this.garage.getCount());
        addCars();
        Assert.assertEquals(3, this.garage.getCount());
    }

    @Test
    public void getCars() {
        List<Car> cars = addCars();
        List<Car> actual = this.garage.getCars();

        for (int i = 0; i < cars.size(); i++) {
            Assert.assertEquals(cars.get(i), actual.get(i));
        }
    }

    @Test(expected = UnsupportedOperationException.class)
    public void getCarsShouldReturnUnmodifiableList() {
        addCars();
        List<Car> actual = this.garage.getCars();
        actual.add(new Car("Alabala", 111, 1111));
    }

    @Test
    public void testFindAllCarsWithMaxSpeedAbove() {
        addCars();
        List<Car> allCarsWithMaxSpeedAbove = this.garage.findAllCarsWithMaxSpeedAbove(220);
        Assert.assertEquals(1, allCarsWithMaxSpeedAbove.size());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddCarShouldThrowIfCarIsNull() {
        this.garage.addCar(null);
    }

    @Test
    public void testGetTheMostExpensiveCar() {
        addCars();
        Car theMostExpensiveCar = this.garage.getTheMostExpensiveCar();
        Assert.assertEquals(19999, theMostExpensiveCar.getPrice(), 0.00);
    }

    @Test
    public void testFindAllCarsByBrand() {
        addCars();
        List<Car> vw = this.garage.findAllCarsByBrand("VW");
        Assert.assertEquals(1, vw.size());
    }

    private List<Car> addCars() {
        Car car1 = new Car("Ford", 200, 1999);
        Car car2 = new Car("VW", 220, 2999);
        Car car3 = new Car("Ferrari", 300, 19999);

        this.garage.addCar(car1);
        this.garage.addCar(car2);
        this.garage.addCar(car3);

        return List.of(car1, car2, car3);
    }
}