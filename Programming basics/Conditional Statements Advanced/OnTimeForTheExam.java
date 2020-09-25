import java.util.Scanner;

public class OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hourOfExam = Integer.parseInt(scanner.nextLine());
        int minutesOfExam = Integer.parseInt(scanner.nextLine());
        int hourOfArrive = Integer.parseInt(scanner.nextLine());
        int minutesOfArrive = Integer.parseInt(scanner.nextLine());

        int examInMinutes = hourOfExam * 60 + minutesOfExam;
        int arrivalInMinutes = hourOfArrive * 60 + minutesOfArrive;
        int timeDifference = Math.abs(examInMinutes - arrivalInMinutes);
        int timeDifferenceInHours = timeDifference / 60;
        int timeDifferenceInMinutes = timeDifference % 60;

        if (arrivalInMinutes + 30 < examInMinutes) {
            System.out.println("Early");
            if (timeDifference < 60) {
                System.out.printf("%d minutes before the start", timeDifferenceInMinutes);
            } else {
                System.out.printf("%d:%02d hours before the start", timeDifferenceInHours, timeDifferenceInMinutes);
            }
        } else if (arrivalInMinutes <= examInMinutes) {
            System.out.println("On time");
            if (timeDifference > 0) {
                System.out.printf("%d minutes before the start", timeDifferenceInMinutes);
            }
        } else {
            System.out.println("Late");
            if (timeDifference < 60) {
                System.out.printf("%d minutes after the start", timeDifferenceInMinutes);
            } else {
                System.out.printf("%d:%02d hours after the start", timeDifferenceInHours, timeDifferenceInMinutes);
            }
        }
    }
}
