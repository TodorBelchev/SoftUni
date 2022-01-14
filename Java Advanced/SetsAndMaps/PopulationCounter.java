package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Scanner;

public class PopulationCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        LinkedHashMap<String, LinkedHashMap<String, Long>> countries = new LinkedHashMap<>();
        LinkedHashMap<String, Long> countriesPopulation = new LinkedHashMap<>();

        while (!command.equals("report")) {
            String[] tokens = command.split("\\|");
            String city = tokens[0];
            String country = tokens[1];
            long population = Integer.parseInt(tokens[2]);

            countries.putIfAbsent(country, new LinkedHashMap<>());
            countriesPopulation.putIfAbsent(country, 0L);
            countriesPopulation.put(country, countriesPopulation.get(country) + population);
            LinkedHashMap<String, Long> countryCities = countries.get(country);
            countryCities.put(city, population);

            command = scanner.nextLine();
        }

        countries.entrySet().stream()
                .sorted((a, b) -> countriesPopulation.get(b.getKey()).compareTo(countriesPopulation.get(a.getKey())))
                .forEach(x -> {
                    System.out.printf("%s (total population: %d)%n", x.getKey(), countriesPopulation.get(x.getKey()));
                    x.getValue().entrySet().stream()
                            .sorted((t1, t2) -> (int) (t2.getValue() - t1.getValue()))
                            .forEach(t -> System.out.printf("=>%s: %d%n", t.getKey(), t.getValue()));
                });


    }
}
