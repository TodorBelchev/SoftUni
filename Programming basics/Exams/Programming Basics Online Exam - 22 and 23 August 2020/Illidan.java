import java.util.Scanner;

public class Illidan {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pplCount = Integer.parseInt(scanner.nextLine());
        int power = Integer.parseInt(scanner.nextLine());
        int hpOfBoss = Integer.parseInt(scanner.nextLine());
        int totalPower = pplCount * power;

        if (totalPower >= hpOfBoss) {
            System.out.printf("Illidan has been slain! You defeated him with %d points.", totalPower - hpOfBoss);
        } else {
            System.out.printf("You are not prepared! You need %d more points.", hpOfBoss - totalPower);
        }

    }
}
