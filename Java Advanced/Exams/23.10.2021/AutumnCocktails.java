package exams.Exam23Oct2021;

import java.util.*;

public class AutumnCocktails {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] ingredients = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] freshness = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        ArrayDeque<Integer> queue = new ArrayDeque<>();
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        Map<Integer, Map<String, Integer>> cocktails = new HashMap<>();
        cocktails.put(150, new HashMap<>());
        cocktails.put(250, new HashMap<>());
        cocktails.put(300, new HashMap<>());
        cocktails.put(400, new HashMap<>());
        cocktails.get(150).put("Pear Sour", 0);
        cocktails.get(250).put("The Harvest", 0);
        cocktails.get(300).put("Apple Hinny", 0);
        cocktails.get(400).put("High Fashion", 0);
        boolean isMadeOne = false;
        boolean isMadeTwo = false;
        boolean isMadeThree = false;
        boolean isMadeFour = false;

        for (int i = 0; i < ingredients.length; i++) {
            queue.offer(ingredients[i]);
        }

        for (int i = 0; i < freshness.length; i++) {
            stack.push(freshness[i]);
        }

        while (!queue.isEmpty() && !stack.isEmpty()) {
            int ingredient = queue.poll();
            if (ingredient == 0) {
                continue;
            }
            int fresh = stack.pop();
            int result = ingredient * fresh;

            if (cocktails.containsKey(result)) {
                if (result == 150) {
                    isMadeOne = true;
                }
                if (result == 250) {
                    isMadeTwo = true;
                }
                if (result == 300) {
                    isMadeThree = true;
                }
                if (result == 400) {
                    isMadeFour = true;
                }
                Map<String, Integer> current = cocktails.get(result);
                String key = current.keySet().toArray()[0].toString();
                current.put(key, current.get(key) + 1);
                cocktails.put(result, current);
            } else {
                ingredient += 5;
                queue.offer(ingredient);
            }
        }

        if (isMadeOne && isMadeTwo && isMadeThree && isMadeFour) {
            System.out.println("It's party time! The cocktails are ready!");
        } else {
            System.out.println("What a pity! You didn't manage to prepare all cocktails.");
        }

        if (!queue.isEmpty()) {
            int sum = 0;
            while (!queue.isEmpty()) {
                sum += queue.poll();
            }

            System.out.println("Ingredients left: " + sum);
        }

        cocktails.values().stream()
                .sorted(Comparator.comparing(c -> c.keySet().toArray()[0].toString()))
                .filter(c -> (int) c.values().toArray()[0] != 0)
                .forEach(c -> System.out.printf(" # %s --> %d%n", c.keySet().toArray()[0].toString(), c.values().toArray()[0]));
    }
}
