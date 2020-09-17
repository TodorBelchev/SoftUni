import java.util.Scanner;

public class HousePainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double height = Double.parseDouble(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        double heightRoof = Double.parseDouble(scanner.nextLine());
        double areaOfFrontAndBack = (height * height) * 2 - 1.2 * 2;
        double areaOfSides = (height * length - 1.5 * 1.5) * 2;
        double greenPaint = (areaOfFrontAndBack + areaOfSides) / 3.4;
        double roofArea = (height * length) * 2 + (height * heightRoof / 2) * 2;
        double redPaint = roofArea / 4.3;
        System.out.printf("%.2f%n", greenPaint);
        System.out.printf("%.2f", redPaint);
    }
}
