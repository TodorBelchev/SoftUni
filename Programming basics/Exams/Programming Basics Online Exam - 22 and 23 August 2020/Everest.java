import java.util.Scanner;

public class Everest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        int reachedMeters = 5364;
        int counter = 1;
        boolean isClimbed = false;

        while (!"END".equals(command)) {
            int currentMeters = Integer.parseInt(scanner.nextLine());

            if ("Yes".equals(command)) {
                counter++;
            }

            if (counter > 5) {
                break;
            }

            reachedMeters += currentMeters;

            if (reachedMeters >= 8848) {
                isClimbed = true;
                break;
            }

            command = scanner.nextLine();
        }

        if (isClimbed) {
            System.out.printf("Goal reached for %d days!", counter);
        } else {
            System.out.println("Failed!");
            System.out.print(reachedMeters);
        }

    }
}
