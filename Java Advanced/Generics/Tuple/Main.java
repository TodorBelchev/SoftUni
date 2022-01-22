package Generics.Tuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Tuple> tuples = new ArrayList<>();

        String[] line = scanner.nextLine().split("\\s+");
        tuples.add(new Tuple(String.format("%s %s", line[0], line[1]), line[2]));
        line = scanner.nextLine().split("\\s+");
        tuples.add(new Tuple(line[0], line[1]));
        line = scanner.nextLine().split("\\s+");
        tuples.add(new Tuple(Integer.parseInt(line[0]), Double.parseDouble(line[1])));

        tuples.forEach(System.out::println);
    }
}
