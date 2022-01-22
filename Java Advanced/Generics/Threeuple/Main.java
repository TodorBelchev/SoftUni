package Generics.Threeuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Threeuple> tuples = new ArrayList<>();

        String[] line = scanner.nextLine().split("\\s+");
        tuples.add(new Threeuple(String.format("%s %s", line[0], line[1]), line[2], line[3]));
        line = scanner.nextLine().split("\\s+");
        String isDrunk = line[2].equals("drunk") ? "true" : "false";
        tuples.add(new Threeuple(line[0], line[1], isDrunk));
        line = scanner.nextLine().split("\\s+");
        tuples.add(new Threeuple(line[0], Double.parseDouble(line[1]), line[2]));

        tuples.forEach(System.out::println);
    }
}
