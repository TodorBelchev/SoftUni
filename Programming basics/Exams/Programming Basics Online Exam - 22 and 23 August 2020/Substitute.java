import java.util.Scanner;

public class Substitute {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstNumFirstIntervalStart = Integer.parseInt(scanner.nextLine());
        int firstNumSecondIntervalStart = Integer.parseInt(scanner.nextLine());
        int secondNumFirstIntervalStart = Integer.parseInt(scanner.nextLine());
        int secondNumSecondIntervalStart = Integer.parseInt(scanner.nextLine());

        int firstNumber = 0;
        int secondNumber = 0;
        int counter = 0;
        boolean isCounted = false;

        for (int i = firstNumFirstIntervalStart; i <= 8; i++) {
            for (int j = 9; j >= firstNumSecondIntervalStart; j--) {
                for (int k = secondNumFirstIntervalStart; k <= 8; k++) {
                    for (int l = 9; l >= secondNumSecondIntervalStart; l--) {
                        String number = "" + i + j;
                        firstNumber = Integer.parseInt(number);
                        String number2 = "" + k + l;
                        secondNumber = Integer.parseInt(number2);
                        boolean isValid = i % 2 == 0 && j % 2 != 0 && k % 2 == 0 && l % 2 != 0;

                        if (isValid && firstNumber == secondNumber) {
                            System.out.println("Cannot change the same player.");
                        } else if (isValid && firstNumber != secondNumber) {
                            System.out.printf("%d%d - %d%d%n", i, j, k, l);
                            counter++;
                        }

                        if (counter == 6) {
                            isCounted = true;
                            break;
                        }

                    }

                    if (isCounted) {
                        break;
                    }

                }

                if (isCounted) {
                    break;
                }
                
            }

            if (isCounted) {
                break;
            }

        }
    }
}
