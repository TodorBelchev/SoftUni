package SetsAndMaps;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class CountRealNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] input = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToDouble(Double::parseDouble)
                .toArray();
        LinkedHashMap<Double, Integer> output = new LinkedHashMap<>();

        Arrays.stream(input).forEach(x -> {
            output.putIfAbsent(x, 0);
            int current = output.get(x);
            output.put(x, ++current);
        });

        output.forEach((k, v) -> System.out.printf("%.1f -> %d%n", k, v));

    }
}
