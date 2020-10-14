import java.util.Scanner;

public class MovieTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int num3 = Integer.parseInt(scanner.nextLine());

        for (int i = num1; i <= num2 - 1; i++) {
            char symbol1 = (char) i;

            for (int j = 1; j <= num3 - 1; j++) {

                for (int k = 1; k <= num3 / 2 - 1; k++) {

                    if (symbol1 % 2 != 0 && (j + k + i) % 2 != 0) {
                        System.out.printf("%c-%d%d%d%n", symbol1, j, k, i);
                    }
                }
            }
        }
    }
}
