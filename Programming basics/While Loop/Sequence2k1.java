import java.util.Scanner;

public class Sequence2k1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        int currentNumber = 1;

        while (currentNumber <= number) {
            System.out.println(currentNumber);
            currentNumber = currentNumber * 2 + 1;
        }
    }
}
