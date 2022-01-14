package SetsAndMaps;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.TreeMap;

public class AverageStudentsGrades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int studentsCount = Integer.parseInt(scanner.nextLine());
        TreeMap<String, ArrayList<Double>> studentsGrades = new TreeMap<>();
        for (int i = 0; i < studentsCount; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String student = input[0];
            double studentGrade = Double.parseDouble(input[1]);
            studentsGrades.putIfAbsent(student, new ArrayList<>());
            studentsGrades.get(student).add(studentGrade);
        }

        studentsGrades.forEach((k,v)-> {
            StringBuilder sb = new StringBuilder();
            sb.append(k).append(" -> ");
            double sum = 0;
            for (Double grade: v) {
                sum += grade;
                sb.append(String.format("%.2f", grade)).append(" ");
            }
            double avg = sum / v.size();
            sb.append(String.format("(avg: %.2f)", avg));
            System.out.println(sb.toString());
        });
    }
}
