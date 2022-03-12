package polymorphism.vehicles;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] tokens = scanner.nextLine().split("\\s+");

        double fuel = Double.parseDouble(tokens[1]);
        double consumption = Double.parseDouble(tokens[2]);
        Car car = new Car(fuel, consumption);

        tokens = scanner.nextLine().split("\\s+");
        fuel = Double.parseDouble(tokens[1]);
        consumption = Double.parseDouble(tokens[2]);
        Truck truck = new Truck(fuel, consumption);

        Map<String, Vehicle> vehicles = new LinkedHashMap<>();
        vehicles.put("Car", car);
        vehicles.put("Truck", truck);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String[] command = scanner.nextLine().split("\\s+");
            String commandType = command[0];
            String vehicleType = command[1];
            double fuelOrDistance = Double.parseDouble(command[2]);

            switch (commandType) {
                case "Drive":
                    try {
                        System.out.println(vehicles.get(vehicleType).drive(fuelOrDistance));
                    } catch (IllegalArgumentException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case "Refuel":
                    vehicles.get(vehicleType).refuel(fuelOrDistance);
                    break;
            }
        }

        vehicles.values().forEach(System.out::println);
    }
}
