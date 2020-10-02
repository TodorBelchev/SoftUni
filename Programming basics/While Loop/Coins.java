import java.util.Scanner;

public class Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double number = Double.parseDouble(scanner.nextLine());
        double numberInCents = Math.round(number * 100);
        int coinsCounter = 0;
        while (!(numberInCents == 0)) {
            if (numberInCents >= 200) {
                numberInCents -= 200;
                coinsCounter++;
            } else if (numberInCents >= 100) {
                numberInCents -= 100;
                coinsCounter++;
            } else if (numberInCents >= 50) {
                numberInCents -= 50;
                coinsCounter++;
            } else if (numberInCents >= 20) {
                numberInCents -= 20;
                coinsCounter++;
            } else if (numberInCents >= 10) {
                numberInCents -= 10;
                coinsCounter++;
            } else if (numberInCents >= 5) {
                numberInCents -= 5;
                coinsCounter++;
            } else if (numberInCents >= 2) {
                numberInCents -= 2;
                coinsCounter++;
            } else if (numberInCents >= 1) {
                numberInCents -= 1;
                coinsCounter++;
            }
        }
        System.out.println(coinsCounter);
    }
}
