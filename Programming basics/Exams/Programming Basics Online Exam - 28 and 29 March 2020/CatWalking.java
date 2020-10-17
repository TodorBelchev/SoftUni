import java.util.Scanner;

public class CatWalking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int walkInMinutes = Integer.parseInt(scanner.nextLine());
        int walkTimes = Integer.parseInt(scanner.nextLine());
        int calories = Integer.parseInt(scanner.nextLine());

        int walkTotalInMinutes = walkInMinutes * walkTimes;
        int burnedCalories = walkTotalInMinutes * 5;
        double halfCalories = calories * 0.5;

        if (burnedCalories >= halfCalories) {
            System.out.printf("Yes, the walk for your cat is enough. Burned calories per day: %d.%n", burnedCalories);
        } else {
            System.out.printf("No, the walk for your cat is not enough. Burned calories per day: %d.%n", burnedCalories);
        }
    }
}
