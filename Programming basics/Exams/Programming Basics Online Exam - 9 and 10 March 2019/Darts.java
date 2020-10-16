import java.util.Scanner;

public class Darts {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int points = 301;
        int count = 0;
        int failedHits = 0;

        while (true) {
            String sector = scanner.nextLine();

            if ("Retire".equals(sector)) {
                break;
            }

            int hit = Integer.parseInt(scanner.nextLine());

            if ("Triple".equals(sector)) {
                hit *= 3;
            } else if ("Double".equals(sector)) {
                hit *= 2;
            }

            if (hit <= points) {
                points -= hit;
                count++;

                if (points == 0) {
                    break;
                }

            } else {
                failedHits++;
            }

        }
        
        if (points == 0) {
            System.out.printf("%s won the leg with %d shots.", name, count);
        } else {
            System.out.printf("%s retired after %d unsuccessful shots.", name, failedHits);
        }
    }
}
