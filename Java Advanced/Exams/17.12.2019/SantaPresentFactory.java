import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.Scanner;

public class SantaPresentFactory {
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
        int dolls = 0;
        int trains = 0;
        int bears = 0;
        int bicycle = 0;

        for (int i = 0; i < first.length; i++) {
            stack.push(first[i]);
        }

        for (int i = 0; i < second.length; i++) {
            queue.offer(second[i]);
        }

        while (!stack.isEmpty() && !queue.isEmpty()) {
            int material = stack.peek();
            int magic = queue.poll();
            int result = material * magic;

            if (material == 0 || magic == 0) {
                if (material == 0) {
                    stack.pop();
                }
                continue;
            }

            if (result < 0) {
                int sum = material + magic;
                stack.pop();
                stack.push(sum);
            } else if (result == 150) {
                stack.pop();
                dolls++;
            } else if (result == 250) {
                stack.pop();
                trains++;
            } else if (result == 300) {
                stack.pop();
                bears++;
            } else if (result == 400) {
                stack.pop();
                bicycle++;
            } else {
                stack.pop();
                stack.push(material + 15);
            }
        }

        if ((dolls > 0 && trains > 0) || (bears > 0 && bicycle > 0)) {
            System.out.println("The presents are crafted! Merry Christmas!");
        } else {
            System.out.println("No presents this Christmas!");
        }

        if (!stack.isEmpty()) {
            System.out.println("Materials left: " + stack.toString().replaceAll("[\\[\\]]", ""));
        }

        if (!queue.isEmpty()) {
            System.out.println("Magic left: " + queue.toString().replaceAll("[\\[\\]]", ""));
        }

        if (bicycle > 0) {
            System.out.println("Bicycle: " + bicycle);
        }

        if (bears > 0) {
            System.out.println("Teddy bear: " + bears);
        }

        if (dolls > 0) {
            System.out.println("Doll: " + dolls);
        }

        if (trains > 0) {
            System.out.println("Wooden train: " + trains);
        }
    }
}
