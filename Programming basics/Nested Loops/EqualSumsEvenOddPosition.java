import java.util.Scanner;

public class EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int startNumber = Integer.parseInt(scanner.nextLine());
        int lastNumber = Integer.parseInt(scanner.nextLine());

        for (int i = startNumber; i <= lastNumber; i++) {
            int sumEven = 0;
            int sumOdd = 0;
            String currentNumber = i + "";
            for (int j = 0; j < currentNumber.length(); j++) {
                int current = Integer.parseInt("" + currentNumber.charAt(j));
                if (j % 2 == 0) {
                    sumEven += current;
                } else {
                    sumOdd += current;
                }
            }
            if (sumEven == sumOdd) {
                System.out.print(i + " ");
            }
        }
    }
}
