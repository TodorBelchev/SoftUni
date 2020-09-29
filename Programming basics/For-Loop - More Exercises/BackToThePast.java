import java.util.Scanner;

public class BackToThePast {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int year = Integer.parseInt(scanner.nextLine());
        double expenses = 0;
        int age = 18;
        for (int i = 1800; i <= year; i++) {
            if (i % 2 == 0) {
                expenses += 12000;
            } else {
                expenses += 12000 + 50 * age;
            }
            age++;
        }
        if (budget >= expenses) {
            System.out.printf("Yes! He will live a carefree life and will have %.2f dollars left.", budget - expenses);
        } else {
            System.out.printf("He will need %.2f dollars to survive.", expenses - budget);
        }
    }
}
