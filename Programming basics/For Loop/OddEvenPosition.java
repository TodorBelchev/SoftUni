import java.util.Scanner;

public class OddEvenPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double oddSum = 0;
        double oddMin = 999999999;
        double oddMax = -999999999;
        double evenSum = 0;
        double evenMin = 999999999;
        double evenMax = -999999999;
        for (int i = 1; i <= n; i++) {
            double currentNum = Double.parseDouble(scanner.nextLine());
            if (i % 2 == 0) {
                evenSum += currentNum;
                if (currentNum > evenMax) {
                    evenMax = currentNum;
                }
                if (currentNum < evenMin) {
                    evenMin = currentNum;
                }
            } else {
                oddSum += currentNum;
                if (currentNum > oddMax) {
                    oddMax = currentNum;
                }
                if (currentNum < oddMin) {
                    oddMin = currentNum;
                }
            }
        }
        System.out.printf("OddSum=%.2f,%n", oddSum);
        if (oddMin == 999999999) {
            System.out.printf("OddMin=No,%n");
        } else {
            System.out.printf("OddMin=%.2f,%n", oddMin);
        }
        if (oddMax == -999999999) {
            System.out.printf("OddMax=No,%n");
        } else {
            System.out.printf("OddMax=%.2f,%n", oddMax);
        }
        System.out.printf("EvenSum=%.2f,%n", evenSum);
        if (evenMin == 999999999) {
            System.out.printf("EvenMin=No,%n");
        } else {
            System.out.printf("EvenMin=%.2f,%n", evenMin);
        }
        if (evenMax == -999999999) {
            System.out.printf("EvenMax=No%n");
        } else {
            System.out.printf("EvenMax=%.2f%n", evenMax);
        }
    }
}
