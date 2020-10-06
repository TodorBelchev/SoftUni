import java.util.Scanner;

public class TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfJudges = Integer.parseInt(scanner.nextLine());
        String nameOfPresentation = scanner.nextLine();
        double gradeForAll = 0;
        int presentationCount = 0;

        while (!nameOfPresentation.equals("Finish")) {
            double totalGrade = 0;
            for (int i = 1; i <= numberOfJudges; i++) {
                double currentGrade = Double.parseDouble(scanner.nextLine());
                totalGrade += currentGrade;
                gradeForAll += currentGrade;
                presentationCount++;
            }
            System.out.printf("%s - %.2f.%n", nameOfPresentation, totalGrade / numberOfJudges);
            nameOfPresentation = scanner.nextLine();
        }
        System.out.printf("Student's final assessment is %.2f.", gradeForAll / presentationCount);
    }
}
