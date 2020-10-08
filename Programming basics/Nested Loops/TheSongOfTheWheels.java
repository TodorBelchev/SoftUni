import java.util.Scanner;

public class TheSongOfTheWheels {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int M = Integer.parseInt(scanner.nextLine());
        int passCounter = 0;
        String pass = "";
        for (int a = 1; a <= 9; a++) {
            for (int b = 1; b <= 9; b++) {
                for (int c = 1; c <= 9; c++) {
                    for (int d = 1; d <= 9; d++) {
                        if ((a * b + c * d == M) && a < b && c > d) {
                            System.out.printf("%d%d%d%d ", a, b, c, d);
                            passCounter++;
                            if (passCounter == 4) {
                                pass = "" + a + b + c + d;
                            }
                        }
                    }
                }
            }
        }
        if (passCounter < 4) {
            System.out.println();
            System.out.print("No!");
        } else {
            System.out.println();
            System.out.printf("Password: %s", pass);
        }
    }
}
