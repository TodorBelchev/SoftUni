import java.util.Scanner;

public class Pets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int food = Integer.parseInt(scanner.nextLine());
        double dogFoodForDay = Double.parseDouble(scanner.nextLine());
        double catFoodForDay = Double.parseDouble(scanner.nextLine());
        double turtleFoodForDay = Double.parseDouble(scanner.nextLine());

        double foodForDog = dogFoodForDay * days;
        double foodForCat = catFoodForDay * days;
        double foodForTurtle = (turtleFoodForDay * days) / 1000;
        double totalFood = foodForDog + foodForCat + foodForTurtle;

        if (totalFood <= food) {
            System.out.printf("%.0f kilos of food left.", Math.floor(food - totalFood));
        } else {
            System.out.printf("%.0f more kilos of food are needed.", Math.ceil(totalFood - food));
        }
    }
}
