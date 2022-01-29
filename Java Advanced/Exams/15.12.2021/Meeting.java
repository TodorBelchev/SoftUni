import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Meeting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<Integer> males = new ArrayDeque<>();
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .forEach(males::push);
        ArrayDeque<Integer> females = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toCollection(ArrayDeque::new));
        int matches = 0;

        while (!males.isEmpty() && !females.isEmpty()) {
            int male = males.peek();
            int female = females.peek();

            if (female <= 0) {
                females.poll();
            } else if (male <= 0) {
                males.pop();
            } else if (female % 25 == 0) {
                females.poll();
                females.poll();
            } else if (male % 25 == 0) {
                males.pop();
                males.pop();
            } else if (male == female) {
                males.pop();
                females.poll();
                matches++;
            } else {
                females.poll();
                males.pop();
                males.push(male - 2);
            }
        }
        System.out.println("Matches: " + matches);
        if (!males.isEmpty()) {
            System.out.print("Males left: ");
            System.out.println(String.join(", ", males.toString())
                    .replaceAll("[\\[\\]]", ""));
        } else {
            System.out.println("Males left: none");
        }

        if (!females.isEmpty()) {
            System.out.print("Females left: ");
            System.out.println(String.join(", ", females.toString())
                    .replaceAll("[\\[\\]]", ""));
        } else {
            System.out.println("Females left: none");
        }
    }
}
