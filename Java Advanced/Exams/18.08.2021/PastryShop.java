import java.util.*;

public class PastryShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] firstLine = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] secondLine = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        ArrayDeque<Integer> liquids = new ArrayDeque<>();
        ArrayDeque<Integer> ingredients = new ArrayDeque<>();
        Map<String,Integer> cookies = new TreeMap<>();
        cookies.put("Biscuit", 0);
        cookies.put("Cake", 0);
        cookies.put("Pie", 0);
        cookies.put("Pastry", 0);
        for (int i = 0; i < firstLine.length; i++) {
            liquids.offer(firstLine[i]);
        }
        for (int i = 0; i < secondLine.length; i++) {
            ingredients.push(secondLine[i]);
        }

        while (!liquids.isEmpty() && !ingredients.isEmpty()) {
            int liquid = liquids.poll();
            int ingredient = ingredients.pop();
            int result = liquid + ingredient;

            if(result == 25) {
                cookies.put("Biscuit", cookies.get("Biscuit") + 1);
            } else if (result == 50) {
                cookies.put("Cake", cookies.get("Cake") + 1);
            } else if (result == 75) {
                cookies.put("Pastry", cookies.get("Pastry") + 1);
            } else if (result == 100) {
                cookies.put("Pie", cookies.get("Pie") + 1);
            } else {
                ingredients.push(ingredient + 3);
            }
        }
        long count = cookies.entrySet().stream()
                .filter(e -> e.getValue() != 0)
                .count();
        if (count == 4) {
            System.out.println("Great! You succeeded in cooking all the food!");
        } else {
            System.out.println("What a pity! You didn't have enough materials to cook everything.");
        }

        if (liquids.isEmpty()) {
            System.out.println("Liquids left: none");
        } else {
            System.out.println("Liquids left: " + String.join(", ", liquids.toString())
                    .replaceAll("[\\[\\]]", ""));
        }

        if (ingredients.isEmpty()) {
            System.out.println("Ingredients left: none");
        } else {
            System.out.println("Ingredients left: " + String.join(", ", ingredients.toString())
                    .replaceAll("[\\[\\]]", ""));
        }
        System.out.println("Biscuit: " + cookies.get("Biscuit"));
        System.out.println("Cake: " + cookies.get("Cake"));
        System.out.println("Pie: " + cookies.get("Pie"));
        System.out.println("Pastry: " + cookies.get("Pastry"));
    }
}
