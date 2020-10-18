import java.util.Scanner;

public class SuitcasesLoad {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double capacity = Double.parseDouble(scanner.nextLine());
        String command = scanner.nextLine();
        int commandCounter = 0;

        while (!command.equals("End")) {
            double volumeOfSuitcase = Double.parseDouble(command);
            capacity -= volumeOfSuitcase;
            commandCounter++;

            if (commandCounter % 3 == 0) {
                capacity -= volumeOfSuitcase * 0.1;
            }

            if (capacity < 0) {
                commandCounter--;
                System.out.printf("No more space!%n");
                break;
            }

            command = scanner.nextLine();
        }

        if (command.equals("End") && capacity >= 0) {
            System.out.printf("Congratulations! All suitcases are loaded!%n");
        }

        System.out.printf("Statistic: %d suitcases loaded.", commandCounter);
    }
}
