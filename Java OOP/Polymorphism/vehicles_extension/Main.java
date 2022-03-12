package polymorphism.vehicles_extension;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] tokens = scanner.nextLine().split(" ");
        Vehicle car = getVehicle(tokens);

        tokens = scanner.nextLine().split(" ");
        Vehicle truck = getVehicle(tokens);

        tokens = scanner.nextLine().split(" ");
        Vehicle bus = getVehicle(tokens);

        Map<String, Vehicle> vehicles = new LinkedHashMap<>();
        vehicles.put("Car", car);
        vehicles.put("Truck", truck);
        vehicles.put("Bus", bus);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String[] command = scanner.nextLine().split("\\s+");
            String commandType = command[0];
            String vehicleType = command[1];
            double fuelOrDistance = Double.parseDouble(command[2]);
            Vehicle vehicle = vehicles.get(vehicleType);

            try {
                switch (commandType) {
                    case "Drive":
                        if (vehicle instanceof Bus) {
                            ((Bus) vehicle).setEmpty(false);
                        }
                        System.out.println(vehicle.drive(fuelOrDistance));
                        break;
                    case "Refuel":
                        vehicle.refuel(fuelOrDistance);
                        break;
                    case "DriveEmpty":
                        if (vehicle instanceof Bus) {
                            ((Bus) vehicle).setEmpty(true);
                        }
                        System.out.println(vehicle.drive(fuelOrDistance));
                        break;
                    default:
                        throw new IllegalArgumentException("No such command");
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        vehicles.values().forEach(System.out::println);
    }

    private static Vehicle getVehicle(String[] tokens) {
        String vehicleType = tokens[0];
        double fuelAmount = Double.parseDouble(tokens[1]);
        double consumption = Double.parseDouble(tokens[2]);
        double tankCapacity = Double.parseDouble(tokens[3]);

        Vehicle vehicle = null;
        switch (vehicleType) {
            case "Car":
                vehicle = new Car(fuelAmount, consumption, tankCapacity);
                break;

            case "Bus":
                vehicle = new Bus(fuelAmount, consumption, tankCapacity);
                break;

            case "Truck":
                vehicle = new Truck(fuelAmount, consumption, tankCapacity);
                break;
        }
        return vehicle;
    }
}
