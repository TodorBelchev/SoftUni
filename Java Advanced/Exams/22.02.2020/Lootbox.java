import java.util.*;

public class Lootbox {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] first = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] second = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        Deque<Integer> stack = new ArrayDeque<>();
        Deque<Integer> queue = new ArrayDeque<>();
        int loot = 0;

        for (int i = 0; i < first.length; i++) {
            queue.offer(first[i]);
        }
        for (int i = 0; i < second.length; i++) {
            stack.push(second[i]);
        }

        while (!stack.isEmpty() && !queue.isEmpty()) {
            int firstNum = queue.peek();
            int secondNum = stack.pop();
            int sum = firstNum + secondNum;

            if (sum % 2 == 0) {
                loot += sum;
                queue.poll();
            } else {
                queue.offer(secondNum);
            }
        }

        if (queue.isEmpty()) {
            System.out.println("First lootbox is empty");
        } else {
            System.out.println("Second lootbox is empty");
        }

        if (loot >= 100) {
            System.out.println("Your loot was epic! Value: " + loot);
        } else {
            System.out.println("Your loot was poor... Value: " + loot);
        }
    }
}
