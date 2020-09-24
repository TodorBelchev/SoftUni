import java.util.Scanner;
import java.util.function.DoublePredicate;

public class OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number1 = Integer.parseInt(scanner.nextLine());
        int number2 = Integer.parseInt(scanner.nextLine());
        String operator = scanner.nextLine();
        double result = 0;
        if (operator.equals("+")) {
            result = number1 + number2;
            if (result % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", number1, operator, number2, result);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", number1, operator, number2, result);
            }
        } else if (operator.equals("-")) {
            result = number1 - number2;
            if (result % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", number1, operator, number2, result);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", number1, operator, number2, result);
            }
        } else if (operator.equals("*")) {
            result = number1 * number2;
            if (result % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", number1, operator, number2, result);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", number1, operator, number2, result);
            }
        } else if (operator.equals("/")) {
            result = number1 * 1.0 / number2;
            if (number2 == 0) {
                System.out.printf("Cannot divide %d by zero", number1);
            } else {
                System.out.printf("%d / %d = %.2f", number1, number2, result);
            }
        } else if (operator.equals("%")) {
            result = number1 * 1.0 % number2;
            if (number2 == 0) {
                System.out.printf("Cannot divide %d by zero", number1);
            } else {
                System.out.printf("%d %% %d = %.0f", number1, number2, result);
            }
        }
    }
}
