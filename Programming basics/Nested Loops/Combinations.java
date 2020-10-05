import java.util.Scanner;

public class Combinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int validCombinationsCounter = 0;
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                for (int k = 0; k <= n; k++) {
                    double sum = i + j + k;
                    if (sum == n) {
                        validCombinationsCounter++;
                    }
                }
            }
        }
        System.out.println(validCombinationsCounter);
    }
}
