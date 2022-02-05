package dealership;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Dealership {
    private List<Car> data;
    public String name;
    public int capacity;

    public Dealership(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public void add(Car car) {
        if (this.data.size() < this.capacity) {
            this.data.add(car);
        }
    }

    public boolean buy(String manufacturer, String model) {
        int index = -1;

        for (int i = 0; i < this.data.size(); i++) {
            Car curr = this.data.get(i);
            if (curr.getManufacturer().equals(manufacturer) && curr.getModel().equals(model)) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            this.data.remove(index);
        }

        return index != -1;
    }

    public Car getLatestCar() {
        List<Car> sorted = this.data.stream()
                .sorted((c1, c2) -> Integer.compare(c2.getYear(), c2.getYear()))
                .limit(1)
                .collect(Collectors.toList());
        return sorted.get(0);
    }

    public Car getCar(String manufacturer, String model) {
        Car result = null;

        for (int i = 0; i < this.data.size(); i++) {
            Car curr = this.data.get(i);
            if (curr.getManufacturer().equals(manufacturer) && curr.getModel().equals(model)) {
                result = curr;
                break;
            }
        }

        return result;
    }

    public int getCount() {
        return this.data.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("The cars are in a car dealership %s:%n", this.name));
        for (Car car: this.data) {
            sb.append(car).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
