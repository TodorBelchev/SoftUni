import java.util.Scanner;

public class Renovation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int height = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());
        int percentNotPainted = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();

        int totalArea = (height * width) * 4;
        double areaNotPained = Math.ceil(totalArea * (percentNotPainted * 1.0 / 100));
        double areaForPaint = totalArea - areaNotPained;

        while (!input.equals("Tired!")) {
            int current = Integer.parseInt(input);
            areaForPaint -= current;

            if (areaForPaint < 0) {
                System.out.printf("All walls are painted and you have %.0f l paint left!", Math.abs(areaForPaint));
                break;
            }
            if (areaForPaint == 0) {
                break;
            }

            input = scanner.nextLine();
        }
        if (areaForPaint > 0) {
            System.out.printf("%.0f quadratic m left.", areaForPaint);
        }
        if (areaForPaint == 0) {
            System.out.print("All walls are painted! Great job, Pesho!");
        }
    }
}
