import java.util.Scanner;

public class Skeleton {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int controlMinutes = Integer.parseInt(scanner.nextLine());
        int controlSeconds = Integer.parseInt(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        int secondsFor100Meters = Integer.parseInt(scanner.nextLine());

        int controlTimeInSeconds = controlMinutes * 60 + controlSeconds;
        double accelerationTime = (length / 120) * 2.5;
        double time = (length / 100) * secondsFor100Meters - accelerationTime;

        if (time <= controlTimeInSeconds) {
            System.out.println("Marin Bangiev won an Olympic quota!");
            System.out.printf("His time is %.3f.", time);
        } else {
            System.out.printf("No, Marin failed! He was %.3f second slower.", time - controlTimeInSeconds);
        }

    }
}
