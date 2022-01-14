package SetsAndMaps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.TreeMap;

public class AcademyGraduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        TreeMap<String, ArrayList<Double>> grades = new TreeMap<>();

        for (int i = 0; i < n; i++) {
            String student = scanner.nextLine();
            double[] studentGrades = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToDouble(Double::parseDouble)
                    .toArray();


            grades.putIfAbsent(student, new ArrayList<>());
            Arrays.stream(studentGrades).forEach(x -> {
                grades.get(student).add(x);
            });
        }

        grades.forEach((k, v) -> {
            double sum = 0;
            for (double curr : v) {
                sum += curr;
            }
            double avg = sum / v.size();
            System.out.printf("%s is graduated with " + avg + "%n", k);
        });
    }
}
