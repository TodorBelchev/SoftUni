package Classes.RawData;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, Car> cars = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String model = tokens[0];
            int engineSpeed = Integer.parseInt(tokens[1]);
            int enginePower = Integer.parseInt(tokens[2]);
            int cargoWeight = Integer.parseInt(tokens[3]);
            String cargoType = tokens[4];
            double tire1Pressure = Double.parseDouble(tokens[5]);
            int tire1Age = Integer.parseInt(tokens[6]);
            double tire2Pressure = Double.parseDouble(tokens[7]);
            int tire2Age = Integer.parseInt(tokens[8]);
            double tire3Pressure = Double.parseDouble(tokens[9]);
            int tire3Age = Integer.parseInt(tokens[10]);
            double tire4Pressure = Double.parseDouble(tokens[11]);
            int tire4Age = Integer.parseInt(tokens[12]);

            Engine currEngine = new Engine(engineSpeed, enginePower);
            Cargo currCargo = new Cargo(cargoType, cargoWeight);
            Tire tire1 = new Tire(tire1Pressure, tire1Age);
            Tire tire2 = new Tire(tire2Pressure, tire2Age);
            Tire tire3 = new Tire(tire3Pressure, tire3Age);
            Tire tire4 = new Tire(tire4Pressure, tire4Age);
            List<Tire> currTires = new ArrayList<>();
            Collections.addAll(currTires, tire1, tire2, tire3, tire4);

            Car currCar = new Car(model, currEngine, currCargo, currTires);
            cars.put(model, currCar);
        }

        String command = scanner.nextLine();

        if (command.equals("fragile")) {
            cars.values().forEach(c -> {
                List<Tire> currTires = c.getTires();
                boolean underPressure = currTires.stream().map(Tire::getPressure).anyMatch(t -> t < 1);
                if (c.getCargo().getType().equals("fragile") && underPressure) {
                    System.out.println(c);
                }
            });
        } else if (command.equals("flamable")) {
            cars.values().forEach(c -> {
                if (c.getCargo().getType().equals("flamable") && c.getEngine().getPower() > 250) {
                    System.out.println(c);
                }
            });
        }
    }
}
