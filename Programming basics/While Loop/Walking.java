import java.util.Scanner;

public class Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int steps = 0;
        while (steps < 10000) {
            String command = scanner.nextLine();
            if (command.equals("Going home")) {
                int lastSteps = Integer.parseInt(scanner.nextLine());
                steps += lastSteps;
                break;
            }
            int currentSteps = Integer.parseInt(command);
            steps += currentSteps;
        }
        if (steps > 10000) {
            System.out.println("Goal reached! Good job!");
            System.out.printf("%d steps over the goal!", steps - 10000);
        } else {
            System.out.printf("%d more steps to reach goal.", 10000 - steps);
        }
    }
}

