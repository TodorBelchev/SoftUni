import java.util.Scanner;

public class PasswordGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int l = Integer.parseInt(scanner.nextLine());
        String alphabet = "abcdefghijk";

        for (int symbol1 = 1; symbol1 <= n; symbol1++) {
            for (int symbol2 = 1; symbol2 <= n; symbol2++) {
                for (int k = 0; k < l; k++) {
                    char symbol3 = alphabet.charAt(k);
                    for (int m = 0; m < l; m++) {
                        char symbol4 = alphabet.charAt(m);
                        for (int symbol5 = 1; symbol5 <= n; symbol5++) {
                            if (symbol5 > symbol1 && symbol5 > symbol2) {
                                System.out.printf("%d%d%c%c%d ", symbol1, symbol2, symbol3, symbol4, symbol5);
                            }
                        }
                    }
                }
            }
        }
    }
}
