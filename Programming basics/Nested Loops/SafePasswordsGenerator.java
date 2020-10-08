import java.util.Scanner;

public class SafePasswordsGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int maxPassCount = Integer.parseInt(scanner.nextLine());
        char A = (char) 35;
        char B = (char) 64;
        int passCounter = 0;
        for (int x = 1; x <= a; x++) {
            for (int y = 1; y <= b; y++) {
                passCounter++;
                System.out.printf("%c%c%d%d%c%c|", A, B, x, y, B, A);
                A++;
                B++;
                if (A > 55) {
                    A = (char) 35;
                }
                if (B > 96) {
                    B = (char) 64;
                }
                if (passCounter == maxPassCount) {
                    return;
                }
            }
        }
    }
}
