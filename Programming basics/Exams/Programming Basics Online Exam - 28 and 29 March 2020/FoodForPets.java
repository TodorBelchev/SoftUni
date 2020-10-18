import java.util.Scanner;

public class FoodForPets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        double food = Double.parseDouble(scanner.nextLine());

        int dogFood = 0;
        double totalDogFood = 0;
        int catFood = 0;
        double totalCatFood = 0;
        double biscuits = 0;
        double totalFood = 0;

        for (int i = 1; i <= days; i++) {
            dogFood = Integer.parseInt(scanner.nextLine());
            catFood = Integer.parseInt(scanner.nextLine());
            totalDogFood = totalDogFood + dogFood;
            totalCatFood = totalCatFood + catFood;
            totalFood = totalFood + (catFood + dogFood);

            if (i % 3 == 0) {
                biscuits += (dogFood + catFood) * 0.1;
            }

        }

        double totalFoodPercent = (totalFood / food) * 100;
        double totalDogFoodPercent = (totalDogFood / totalFood) * 100;
        double totalCatFoodPercent = (totalCatFood / totalFood) * 100;

        System.out.printf("Total eaten biscuits: %.0fgr.%n", biscuits);
        System.out.printf("%.2f%% of the food has been eaten.%n", totalFoodPercent);
        System.out.printf("%.2f%% eaten from the dog.%n", totalDogFoodPercent);
        System.out.printf("%.2f%% eaten from the cat.", totalCatFoodPercent);
    }
}
