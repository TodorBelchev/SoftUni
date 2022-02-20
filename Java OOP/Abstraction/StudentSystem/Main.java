package abstraction.student_system;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StudentSystem studentSystem = new StudentSystem();
        String[] input = scanner.nextLine().split("\\s+");

        while (!input[0].equals("Exit")) {
            String command = input[0];
            String studentName = input[1];

            switch (command) {
                case "Create":
                    int age = Integer.parseInt(input[2]);
                    double grade = Double.parseDouble(input[3]);
                    Student student = new Student(studentName, age, grade);
                    studentSystem.addStudent(student);
                    break;
                case "Show":
                    if (studentSystem.checkForStudent(studentName)) {
                        System.out.println(studentSystem.show(studentName));
                    }
                    break;
            }

            input = scanner.nextLine().split("\\s+");
        }
    }
}
