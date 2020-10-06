import java.util.Scanner;

public class SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        int sumNonPrime = 0;
        int sumPrime = 0;

        while (!input.equals("stop")) {
            int current = Integer.parseInt(input);
            boolean isPrime = true;
            if (current == 0) {
                isPrime = false;
            }
            if (current < 0) {
                System.out.println("Number is negative.");
            } else {
                for (int i = 2; i <= current / 2; i++) {
                    if (current % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    sumPrime += current;
                } else {
                    sumNonPrime += current;
                }
            }
            input = scanner.nextLine();
        }
        System.out.printf("Sum of all prime numbers is: %d%n", sumPrime);
        System.out.printf("Sum of all non prime numbers is: %d", sumNonPrime);
    }
}
