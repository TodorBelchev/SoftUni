package encapsulation.pizza_calories;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String[] tokens = input.split("\\s+");

        try {
            String pizzaName = tokens[1];
            int toppingsCount = Integer.parseInt(tokens[2]);

            Pizza pizza = new Pizza(pizzaName, toppingsCount);

            tokens = scanner.nextLine().split("\\s+");

            String flourType = tokens[1];
            String bakingTechnique = tokens[2];
            double weight = Double.parseDouble(tokens[3]);

            Dough dough = new Dough(flourType, bakingTechnique, weight);
            pizza.setDough(dough);

            input = scanner.nextLine();

            while (!input.equals("END")) {
                tokens = input.split("\\s+");

                String toppingType = tokens[1];
                double weightInGrams = Double.parseDouble(tokens[2]);

                Topping topping = new Topping(toppingType, weightInGrams);
                pizza.addTopping(topping);

                input = scanner.nextLine();
            }
            System.out.println(pizza);

        } catch (IllegalArgumentException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
