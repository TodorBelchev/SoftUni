import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class OSPlanning {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] firstLine = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] secondLine = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int taskToKill = Integer.parseInt(scanner.nextLine());
        boolean isTaskDone = false;
        ArrayDeque<Integer> tasks = new ArrayDeque<>();
        ArrayDeque<Integer> threads = new ArrayDeque<>();
        for (int i = 0; i < firstLine.length; i++) {
            tasks.push(firstLine[i]);
        }
        for (int i = 0; i < secondLine.length; i++) {
            threads.offer(secondLine[i]);
        }

        while (!isTaskDone) {
            int task = tasks.peek();
            int thread = threads.peek();

            if (task == taskToKill) {
                System.out.printf("Thread with value %d killed task %d%n", thread, task);
                for (int t : threads) {
                    System.out.print(t + " ");
                }
                break;
            }

            threads.poll();
            if (thread >= task) {
                tasks.pop();
            }
        }
    }
}
