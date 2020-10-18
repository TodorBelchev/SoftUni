import java.util.Scanner;

public class CareOfPuppy {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int food = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int totalFood = food * 1000;
        int totalFoodEaten = 0;

        while (!command.equals("Adopted")) {
            int foodEaten = Integer.parseInt(command);
            totalFoodEaten += foodEaten;
            command = scanner.nextLine();
        }

        if (totalFoodEaten <= totalFood) {
            System.out.printf("Food is enough! Leftovers: %d grams.", totalFood - totalFoodEaten);
        } else {
            System.out.printf("Food is not enough. You need %d grams more.", totalFoodEaten - totalFood);
        }

    }
}
