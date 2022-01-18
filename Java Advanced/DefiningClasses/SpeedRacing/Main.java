package Classes.SpeedRacing;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, Car> cars = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String model = tokens[0];
            double fuelAmount = Double.parseDouble(tokens[1]);
            double consumption = Double.parseDouble(tokens[2]);
            Car current = new Car(model, fuelAmount, consumption);
            cars.put(model, current);
        }

        String[] command = scanner.nextLine().split("\\s+");
        while (!command[0].equals("End")) {
            String model = command[1];
            int distance = Integer.parseInt(command[2]);

            Car current = cars.get(model);

            if (!current.drive(distance)) {
                System.out.println("Insufficient fuel for the drive");
            }

            command = scanner.nextLine().split("\\s+");
        }

        cars.values().forEach(System.out::println);
    }
}
