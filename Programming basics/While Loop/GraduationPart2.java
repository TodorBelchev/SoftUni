import java.util.Scanner;

public class GraduationPart2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int poorGradesCounter = 0;
        double averageGrade = 0;

        for (int grade = 0; grade < 12; grade++) {
            double currentGrade = Double.parseDouble(scanner.nextLine());
            averageGrade += currentGrade;
            if (currentGrade < 4) {
                poorGradesCounter++;
            }
            if (poorGradesCounter > 1) {
                System.out.printf("%s has been excluded at %d grade", name, grade);
                break;
            }
        }
        if (poorGradesCounter < 1) {
            System.out.printf("%s graduated. Average grade: %.2f", name, averageGrade / 12);
        }
    }
}
