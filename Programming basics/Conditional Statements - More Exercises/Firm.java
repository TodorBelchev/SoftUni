import java.util.Scanner;

public class Firm {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hoursNeeded = Integer.parseInt(scanner.nextLine());
        int days = Integer.parseInt(scanner.nextLine());
        int workers = Integer.parseInt(scanner.nextLine());

        double normalWorkingTime = (days * 0.9) * 8;
        double extraWorkingTime = workers * 2 * days;
        double totalTime = Math.floor(normalWorkingTime + extraWorkingTime);

        if (hoursNeeded <= totalTime) {
            System.out.printf("Yes!%.0f hours left.", totalTime - hoursNeeded);
        } else {
            System.out.printf("Not enough time!%.0f hours needed.", hoursNeeded - totalTime);
        }
    }
}
