import java.util.Scanner;

public class Gymnastics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double grade = 0;
        String country = scanner.nextLine();
        String tool = scanner.nextLine();

        if ("ribbon".equals(tool)) {
            switch (country) {
                case "Russia":
                    grade = 18.5;
                    break;
                case "Bulgaria":
                    grade = 19;
                    break;
                case "Italy":
                    grade = 18.7;
                    break;
            }
        } else if ("hoop".equals(tool)) {
            switch (country) {
                case "Russia":
                    grade = 19.1;
                    break;
                case "Bulgaria":
                    grade = 19.3;
                    break;
                case "Italy":
                    grade = 18.8;
                    break;
            }
        } else {
            switch (country) {
                case "Russia":
                    grade = 18.6;
                    break;
                case "Bulgaria":
                    grade = 18.9;
                    break;
                case "Italy":
                    grade = 18.85;
                    break;
            }
        }
        
        double percent = ((20 - grade) / 20) * 100;
        System.out.printf("The team of %s get %.3f on %s.%n", country, grade, tool);
        System.out.printf("%.2f%%", percent);
    }
}
