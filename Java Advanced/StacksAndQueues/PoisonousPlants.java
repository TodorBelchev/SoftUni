package StackAndQueues;

import java.util.*;

public class PoisonousPlants {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        String[] plantsInput = scanner.nextLine().split("\\s+");
        int[] plants = new int[n];
        int[] days = new int[n];

        for (int i = 0; i < n; i++) {
            plants[i] = Integer.parseInt(plantsInput[i]);
        }

        Deque<Integer> indices = new ArrayDeque<>();
        indices.push(0);
        for (int i = 1; i < n; i++) {
            int maxDays = 0;
            while (!indices.isEmpty() && plants[indices.peek()] >= plants[i]) {
                maxDays = Math.max(maxDays, days[indices.pop()]);
            }
            if (!indices.isEmpty()) {
                days[i] = maxDays + 1;
            }
            indices.push(i);
        }
        System.out.println(getLastDay(days));
    }

    private static int getLastDay(int[] days) {
        int lastDay = 0;
        for (int day : days) {
            if (day > lastDay) {
                lastDay = day;
            }
        }
        return lastDay;
    }
}
