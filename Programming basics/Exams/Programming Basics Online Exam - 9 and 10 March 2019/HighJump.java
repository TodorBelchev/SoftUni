import java.util.Scanner;

public class HighJump {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int target = Integer.parseInt(scanner.nextLine());
        int currentTarget = target - 30;
        boolean isFailed = false;
        int jumpsCount = 0;

        while (true) {
            int failsCount = 0;

            for (int i = 0; i < 3; i++) {
                int current = Integer.parseInt(scanner.nextLine());
                jumpsCount++;

                if (current > currentTarget) {
                    currentTarget += 5;
                    break;
                } else {
                    failsCount++;

                    if (failsCount == 3) {
                        isFailed = true;
                        break;
                    }

                }

            }

            if (isFailed || currentTarget > target) {
                break;
            }

        }

        if (isFailed) {
            System.out.printf("Tihomir failed at %dcm after %d jumps.", currentTarget, jumpsCount);
        } else {
            System.out.printf("Tihomir succeeded, he jumped over %dcm after %d jumps.", target, jumpsCount);
        }
        
    }
}
