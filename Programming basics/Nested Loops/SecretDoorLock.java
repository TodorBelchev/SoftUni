import java.util.Scanner;

public class SecretDoorLock {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hundredsMax = Integer.parseInt(scanner.nextLine());
        int decimalMax = Integer.parseInt(scanner.nextLine());
        int digitMax = Integer.parseInt(scanner.nextLine());
        for (int hundreds = 2; hundreds <= hundredsMax; hundreds += 2) {
            for (int decimal = 2; decimal <= decimalMax; decimal++) {
                for (int digit = 2; digit <= digitMax; digit += 2) {
                    if (decimal == 2 || decimal == 3 || decimal == 5 || decimal == 7) {
                        System.out.printf("%d %d %d%n", hundreds, decimal, digit);
                    }
                }
            }
        }
    }
}
