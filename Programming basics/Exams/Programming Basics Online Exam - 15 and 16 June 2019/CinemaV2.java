import java.util.Scanner;

public class CinemaV2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int capacity = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        double income = 0;
        int takenSeats = 0;

        while (!command.equals("Movie time!")) {
            int current = Integer.parseInt(command);

            if (current > capacity) {
                System.out.println("The cinema is full.");
                break;
            }

            if (current % 3 == 0) {
                income -= 5;
            }

            capacity -= current;
            takenSeats += current;
            income += current * 5;

            command = scanner.nextLine();
        }

        if (capacity >= 0 && command.equals("Movie time!")) {
            System.out.printf("There are %d seats left in the cinema.%n", capacity);
        }

        System.out.printf("Cinema income - %.0f lv.", income);
    }
}
