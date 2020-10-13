import java.util.Scanner;

public class LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int episodeLength = Integer.parseInt(scanner.nextLine());
        int pause = Integer.parseInt(scanner.nextLine());

        double timeForLunch = pause * 0.125;
        double timeForRest = pause * 0.25;
        double timeAfterLunch = pause - timeForLunch - timeForRest;

        if (timeAfterLunch >= episodeLength) {
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", name, Math.ceil(timeAfterLunch - episodeLength));
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", name, Math.ceil(episodeLength - timeAfterLunch));
        }
    }
}
