import java.util.Scanner;

public class PrimePairs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int startFirstPair = Integer.parseInt(scanner.nextLine());
        int startSecondPair = Integer.parseInt(scanner.nextLine());
        int firstPairRange = Integer.parseInt(scanner.nextLine());
        int secondPairRange = Integer.parseInt(scanner.nextLine());
        int lastDigitFirstPair = startFirstPair + firstPairRange;
        int lastDigitSecondPair = startSecondPair + secondPairRange;
        for (int i = startFirstPair; i <= lastDigitFirstPair; i++) {
            for (int j = startSecondPair; j <= lastDigitSecondPair; j++) {
                boolean itsPrime = true;
                for (int k = 2; k <= Math.sqrt(i); k++) {
                    if (i % k == 0) {
                        itsPrime = false;
                        break;
                    }
                }
                for (int l = 2; l <= Math.sqrt(j); l++) {
                    if (j % l == 0) {
                        itsPrime = false;
                        break;
                    }
                }
                if (itsPrime) {
                    System.out.printf("%d%d%n", i, j);
                }
            }
        }
    }
}
