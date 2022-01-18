package Classes.CarSalesman;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, Engine> engines = new HashMap<>();
        List<Car> cars = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String engineModel = tokens[0];
            int enginePower = Integer.parseInt(tokens[1]);
            Engine engine = null;

            if (tokens.length == 4) {
                int engineDisplacement = Integer.parseInt(tokens[2]);
                String engineEfficiency = tokens[3];
                engine = new Engine(engineModel, enginePower, engineDisplacement, engineEfficiency);
            } else if (tokens.length == 2) {
                engine = new Engine(engineModel, enginePower);
            } else if (tokens.length == 3) {
                try {
                    int engineDisplacement = Integer.parseInt(tokens[2]);
                    engine = new Engine(engineModel, enginePower, engineDisplacement);
                } catch (NumberFormatException e) {
                    String engineEfficiency = tokens[2];
                    engine = new Engine(engineModel, enginePower, engineEfficiency);
                }
            }

            engines.put(engineModel, engine);
        }

        int m = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < m; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String model = tokens[0];
            String engineModel = tokens[1];
            Engine engine = engines.get(engineModel);
            Car car = null;

            if (tokens.length == 4) {
                int weight = Integer.parseInt(tokens[2]);
                String color = tokens[3];
                car = new Car(model, engine, weight, color);
            } else if (tokens.length == 2) {
                car = new Car(model, engine);
            } else if (tokens.length == 3) {
                try {
                    int weight = Integer.parseInt(tokens[2]);
                    car = new Car(model, engine, weight);
                } catch (NumberFormatException e) {
                    String color = tokens[2];
                    car = new Car(model, engine, color);
                }
            }
            cars.add(car);

        }

        cars.forEach(System.out::println);

    }
}
