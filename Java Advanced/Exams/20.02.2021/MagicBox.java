import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class MagicBox {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] input1 = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] input2 = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        ArrayDeque<Integer> queue = new ArrayDeque<>();
        int value = 0;

        for (int i = 0; i < input1.length; i++) {
            queue.offer(input1[i]);
        }

        for (int i = 0; i < input2.length; i++) {
            stack.push(input2[i]);
        }

        while (!stack.isEmpty() && !queue.isEmpty()) {
            int queueValue = queue.peek();
            int stackValue = stack.pop();
            int sum = queueValue + stackValue;

            if (sum % 2 == 0) {
                value += sum;
                queue.poll();
            } else {
                queue.offer(stackValue);
            }
        }

        if (queue.isEmpty()) {
            System.out.println("First magic box is empty.");
        } else {
            System.out.println("Second magic box is empty.");
        }

        if (value >= 90) {
            System.out.println("Wow, your prey was epic! Value: " + value);
        } else {
            System.out.println("Poor prey... Value: " + value);
        }
    }
}
