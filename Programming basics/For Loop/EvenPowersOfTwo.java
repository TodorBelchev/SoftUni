import java.util.Scanner;

public class EvenPowersOfTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int power = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i <= power; i += 2) {
            double numberPowered = Math.pow(2, i);
            System.out.printf("%.0f%n", numberPowered);
        }
    }
}
