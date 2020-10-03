import java.util.Scanner;

public class AverageNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int total = 0;
        for (int i = 1; i <= n; i++) {
            int current = Integer.parseInt(scanner.nextLine());
            total += current;
        }
        System.out.printf("%.2f", total * 1.0 / n);
    }
}
