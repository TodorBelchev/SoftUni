
import java.util.Scanner;

public class WeekendOrWorkingDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String day = scanner.nextLine();

        if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
            System.out.println("Working day");
        } else if (day.equals("Saturday") || day.equals("Sunday")) {
            System.out.println("Weekend");
        } else {
            System.out.println("Error");
        }
    }
}
