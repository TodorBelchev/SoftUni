import java.util.Scanner;

public class VacationBooksList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pagesCount = Integer.parseInt(scanner.nextLine());
        int pagesForHour = Integer.parseInt(scanner.nextLine());
        int days = Integer.parseInt(scanner.nextLine());
        int totalTime= pagesCount/pagesForHour;
        int hoursForDay= totalTime/days;
        System.out.println(hoursForDay);
    }
}
