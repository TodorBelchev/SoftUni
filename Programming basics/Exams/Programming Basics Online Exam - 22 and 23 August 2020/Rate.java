import java.util.Scanner;

public class Rate {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double deposit = Double.parseDouble(scanner.nextLine());
        int months = Integer.parseInt(scanner.nextLine());
        double simple = deposit;
        double complex = deposit;

        for (int i = 0; i < months; i++) {
            simple += deposit * 0.03;
            complex += complex * 0.027;
        }

        System.out.printf("Simple interest rate: %.2f lv.%n", simple);
        System.out.printf("Complex interest rate: %.2f lv.%n", complex);

        if (simple > complex) {
            System.out.printf("Choose a simple interest rate. You will win %.2f lv.", simple - complex);
        } else {
            System.out.printf("Choose a complex interest rate. You will win %.2f lv.", complex - simple);
        }

    }
}
