import java.util.Scanner;

public class WeatherForecastPartTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double degrees = Double.parseDouble(scanner.nextLine());
        if (degrees >= 5 && degrees < 12) {
            System.out.println("Cold");
        } else if (degrees >=12 && degrees < 15) {
            System.out.println("Cool");
        } else if (degrees >=15 && degrees <= 20) {
            System.out.println("Mild");
        } else if (degrees >20 && degrees < 26) {
            System.out.println("Warm");
        } else if (degrees>=26 && degrees <= 35) {
            System.out.println("Hot");
        } else {
            System.out.println("unknown");
        }
    }
}
