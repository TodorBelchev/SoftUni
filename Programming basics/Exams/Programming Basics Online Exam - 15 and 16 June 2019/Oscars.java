import java.util.Scanner;

public class Oscars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String actorName = scanner.nextLine();
        double points = Double.parseDouble(scanner.nextLine());
        int judges = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < judges; i++) {
            String judge = scanner.nextLine();
            double currentPoints = Double.parseDouble(scanner.nextLine());
            double currentGrade = (judge.length() * currentPoints) / 2;
            points += currentGrade;

            if (points > 1250.5) {
                break;
            }

        }

        if (points > 1250.5) {
            System.out.printf("Congratulations, %s got a nominee for leading role with %.1f!", actorName, points);
        } else {
            System.out.printf("Sorry, %s you need %.1f more!", actorName, 1250.5 - points);
        }
    }
}
