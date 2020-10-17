import java.util.Scanner;

public class MountainRun {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double record = Double.parseDouble(scanner.nextLine());
        double meters = Double.parseDouble(scanner.nextLine());
        double timeForMeter = Double.parseDouble(scanner.nextLine());

        double totalTime = meters * timeForMeter;
        double delay = Math.floor((meters / 50)) * 30;
        double totalTimeWithDelay = totalTime + delay;
        double timeOverRecord = totalTimeWithDelay - record;

        if (totalTimeWithDelay < record) {
            System.out.printf("Yes! The new record is %.2f seconds.", totalTimeWithDelay);
        } else if (totalTimeWithDelay == record) {
            System.out.printf("No! He was %.2f seconds slower.", timeOverRecord);
        } else {
            System.out.printf("No! He was %.2f seconds slower.", timeOverRecord);
        }
    }
}
