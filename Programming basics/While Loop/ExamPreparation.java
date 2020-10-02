import java.util.Scanner;

public class ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int poorGradesCount = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();
        double averageGrade = 0;
        int courseCounter = 0;
        int currentPoorGradesCount = 0;
        String nameOfCourse = "";
        while (!input.equals("Enough")) {
            int grade = Integer.parseInt(scanner.nextLine());
            averageGrade += grade;
            courseCounter++;
            if (grade <= 4) {
                currentPoorGradesCount++;
            }
            if (currentPoorGradesCount >= poorGradesCount) {
                System.out.printf("You need a break, %d poor grades.", currentPoorGradesCount);
                break;
            }
            nameOfCourse = input;
            input = scanner.nextLine();
        }
        if (input.equals("Enough")) {
            System.out.printf("Average score: %.2f%n", averageGrade / courseCounter);
            System.out.printf("Number of problems: %d%n", courseCounter);
            System.out.printf("Last problem: %s", nameOfCourse);
        }
    }
}
