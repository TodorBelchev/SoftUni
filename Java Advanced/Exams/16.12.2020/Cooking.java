import java.util.*;

public class Cooking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] liquids = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] ingredients = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        ArrayDeque<Integer> queue = new ArrayDeque<>();
        Map<String, Integer> cooked = new TreeMap<>();
        cooked.put("Bread", 0);
        cooked.put("Cake", 0);
        cooked.put("Pastry", 0);
        cooked.put("Fruit Pie", 0);

        for (int i = 0; i < liquids.length; i++) {
            queue.offer(liquids[i]);
        }

        for (int i = 0; i < ingredients.length; i++) {
            stack.push(ingredients[i]);
        }

        while (!stack.isEmpty() && !queue.isEmpty()) {
            int liquid = queue.poll();
            int ingredient = stack.pop();
            int sum = liquid + ingredient;

            if (sum == 25) {
                cooked.put("Bread", cooked.get("Bread") + 1);
            } else if (sum == 50) {
                cooked.put("Cake", cooked.get("Cake") + 1);
            } else if (sum == 75) {
                cooked.put("Pastry", cooked.get("Pastry") + 1);
            } else if (sum == 100) {
                cooked.put("Fruit Pie", cooked.get("Fruit Pie") + 1);
            } else {
                stack.push(ingredient + 3);
            }
        }

        if (cooked.get("Bread") > 0 &&
                cooked.get("Cake") > 0 &&
                cooked.get("Pastry") > 0 &&
                cooked.get("Fruit Pie") > 0) {
            System.out.println("Wohoo! You succeeded in cooking all the food!");
        } else {
            System.out.println("Ugh, what a pity! You didn't have enough materials to cook everything.");
        }

        if (queue.isEmpty()) {
            System.out.println("Liquids left: none");
        } else {
            System.out.println("Liquids left: " + queue.toString().replaceAll("[\\[\\]]", ""));
        }

        if (stack.isEmpty()) {
            System.out.println("Ingredients left: none");
        } else {
            System.out.println("Ingredients left: " + stack.toString().replaceAll("[\\[\\]]", ""));
        }

        cooked.entrySet().forEach(e -> System.out.printf("%s: %d%n", e.getKey(), e.getValue()));
    }
}
