import java.util.Scanner;

public class FitnessCenter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());
        int backCount = 0;
        int chestCount = 0;
        int legsCount = 0;
        int absCount = 0;
        int shakeCount = 0;
        int barCount = 0;

        for (int i = 0; i < count; i++) {
            String activity = scanner.nextLine();

            switch (activity) {
                case "Back":
                    backCount++;
                    break;
                case "Chest":
                    chestCount++;
                    break;
                case "Legs":
                    legsCount++;
                    break;
                case "Abs":
                    absCount++;
                    break;
                case "Protein shake":
                    shakeCount++;
                    break;
                case "Protein bar":
                    barCount++;

                    break;
            }
        }
        
        System.out.printf("%d - back%n", backCount);
        System.out.printf("%d - chest%n", chestCount);
        System.out.printf("%d - legs%n", legsCount);
        System.out.printf("%d - abs%n", absCount);
        System.out.printf("%d - protein shake%n", shakeCount);
        System.out.printf("%d - protein bar%n", barCount);
        double percentWorkOut = ((backCount + chestCount + legsCount + absCount) * 1.0 / count) * 100;
        double percentBuyers = ((shakeCount + barCount) * 1.0 / count) * 100;
        System.out.printf("%.2f%% - work out%n", percentWorkOut);
        System.out.printf("%.2f%% - protein", percentBuyers);
    }
}
