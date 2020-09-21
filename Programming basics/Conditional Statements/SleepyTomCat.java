import java.util.Scanner;

public class SleepyTomCat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int freeDays = Integer.parseInt(scanner.nextLine());

        int freeDaysTime = freeDays * 127;
        int workingDaysTime = (365 - freeDays) * 63;
        int totalTime = freeDaysTime + workingDaysTime;
        int timeDifference = Math.abs(30000 - totalTime);
        int differenceHour = timeDifference / 60;
        int differenceMinutes = timeDifference % 60;

        if (totalTime > 30000) {
            System.out.println("Tom will run away");
            System.out.printf("%d hours and %d minutes more for play", differenceHour, differenceMinutes);
        } else {
            System.out.println("Tom sleeps well");
            System.out.printf("%d hours and %d minutes less for play", differenceHour, differenceMinutes);
        }
    }
}
