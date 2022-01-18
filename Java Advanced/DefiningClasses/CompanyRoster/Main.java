package Classes.CompanyRoster;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, Department> departments = new HashMap<>();
        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String name = input[0];
            double salary = Double.parseDouble(input[1]);
            String position = input[2];
            String department = input[3];
            String email = "n/a";
            int age = -1;

            departments.putIfAbsent(department, new Department(department));

            if (input.length == 6) {
                email = input[4];
                age = Integer.parseInt(input[5]);
            } else if (input.length == 5) {
                try {
                    age = Integer.parseInt(input[4]);
                } catch (NumberFormatException e) {
                    email = input[4];
                }
            }
            Department currentDepartment = departments.get(department);
            Employee current = new Employee(name, salary, position, currentDepartment, email, age);
            currentDepartment.addEmployee(current);
        }

        Department topEarners = departments.values()
                .stream()
                .max(Comparator.comparing(Department::getAverageSalary))
                .get();

        System.out.println("Highest Average Salary: " + topEarners.getName());

        topEarners.getEmployees().stream()
                .sorted(Comparator.comparing(Employee::getSalary).reversed())
                .forEach(System.out::println);
    }
}
