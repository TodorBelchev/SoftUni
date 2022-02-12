package parking;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Parking {
    private String type;
    private int capacity;
    private List<Car> data;

    public Parking(String type, int capacity) {
        this.type = type;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public void add(Car car) {
        if (this.capacity > this.data.size()) {
            this.data.add(car);
        }
    }

    public boolean remove(String manufacturer, String model) {
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
        Car result = null;

        for (Car car : this.data) {
            if (result == null || result.getYear() < car.getYear()) {
                result = car;
            }
        }

        return result;
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
        sb.append(String.format("The cars are parked in %s:%n", this.type));
        this.data.forEach(x -> sb.append(x).append(System.lineSeparator()));
        return sb.toString().trim();
    }
}
