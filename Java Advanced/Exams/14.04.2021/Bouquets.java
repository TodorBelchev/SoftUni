import java.util.*;

public class Bouquets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] tulips = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] daffodils = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        ArrayDeque<Integer> queue = new ArrayDeque<>();
        List<Integer> leftOver = new ArrayList<>();
        int bouquets = 0;

        for (int i = 0; i < tulips.length; i++) {
            stack.push(tulips[i]);
        }
        for (int i = 0; i < daffodils.length; i++) {
            queue.offer(daffodils[i]);
        }

        while (bouquets < 5 && !stack.isEmpty() && !queue.isEmpty()) {
            int tulip = stack.pop();
            int daffodil = queue.poll();
            int sum = tulip + daffodil;

            while (sum > 15) {
                tulip -= 2;
                sum = tulip + daffodil;
            }

            if (sum == 15) {
                bouquets++;
            } else {
                leftOver.add(tulip);
                leftOver.add(daffodil);
            }
        }

        if (bouquets < 5) {
            int leftOverSum = leftOver.stream().mapToInt(Integer::intValue).sum();
            bouquets += leftOverSum / 15;
        }

        if (bouquets == 5) {
            System.out.printf("You made it! You go to the competition with %d bouquets!", bouquets);
        } else {
            System.out.printf("You failed... You need more %d bouquets.", 5 - bouquets);
        }

    }
}
