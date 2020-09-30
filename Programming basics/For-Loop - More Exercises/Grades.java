import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int studentsCount = Integer.parseInt(scanner.nextLine());
        double totalGrade = 0;
        int failGradeCount = 0;
        int lowGradeCount = 0;
        int goodGradeCount = 0;
        int topGradeCount = 0;
        int totalCounter = 0;
        for (int i = 1; i <= studentsCount; i++) {
            double currentGrade = Double.parseDouble(scanner.nextLine());
            totalGrade += currentGrade;
            totalCounter++;
            if (currentGrade < 3) {
                failGradeCount++;
            } else if (currentGrade < 4) {
                lowGradeCount++;
            } else if (currentGrade < 5) {
                goodGradeCount++;
            } else {
                topGradeCount++;
            }
        }
        System.out.printf("Top students: %.2f%%%n", (topGradeCount * 1.0 / totalCounter) * 100);
        System.out.printf("Between 4.00 and 4.99: %.2f%%%n", (goodGradeCount * 1.0 / totalCounter) * 100);
        System.out.printf("Between 3.00 and 3.99: %.2f%%%n", (lowGradeCount * 1.0 / totalCounter) * 100);
        System.out.printf("Fail: %.2f%%%n", (failGradeCount * 1.0 / totalCounter) * 100);
        System.out.printf("Average: %.2f", totalGrade / totalCounter);
    }
}
