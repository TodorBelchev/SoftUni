import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.Scanner;

public class Bombs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] bombEffects = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] bombCasings = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();
        Deque<Integer> stack = new ArrayDeque<>();
        Deque<Integer> queue = new ArrayDeque<>();
        int datura = 0;
        int cherry = 0;
        int smoke = 0;

        for (int i = 0; i < bombEffects.length; i++) {
            queue.offer(bombEffects[i]);
        }

        for (int i = 0; i < bombCasings.length; i++) {
            stack.push(bombCasings[i]);
        }

        while (!stack.isEmpty() && !queue.isEmpty()) {
            int bombEffect = queue.poll();
            int bombCasing = stack.pop();
            int sum = bombEffect + bombCasing;

            if (sum == 120) {
                smoke++;
            } else if (sum == 60) {
                cherry++;
            } else if (sum == 40) {
                datura++;
            } else {
                bombCasing -= 5;
                queue.offerFirst(bombEffect);
                stack.push(bombCasing);
            }

            if (datura >= 3 && cherry >=3 && smoke >= 3) {
                break;
            }
        }

        if (datura >= 3 && cherry >=3 && smoke >= 3) {
            System.out.println("Bene! You have successfully filled the bomb pouch!");
        } else {
            System.out.println("You don't have enough materials to fill the bomb pouch.");
        }

        if (queue.isEmpty()) {
            System.out.println("Bomb Effects: empty");
        } else {
            System.out.println("Bomb Effects: " + queue.toString().replaceAll("[\\[\\]]", ""));
        }

        if (stack.isEmpty()) {
            System.out.println("Bomb Casings: empty");
        } else {
            System.out.println("Bomb Casings: " + stack.toString().replaceAll("[\\[\\]]", ""));
        }

        System.out.println("Cherry Bombs: " + cherry);
        System.out.println("Datura Bombs: " + datura);
        System.out.println("Smoke Decoy Bombs: " + smoke);
    }
}
