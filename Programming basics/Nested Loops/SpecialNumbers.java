import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());

        for (int i = 1111; i <= 9999; i++) {
            String iAsString = i + "";
            char first = iAsString.charAt(0);
            String firstNum = first + "";
            int num1 = Integer.parseInt(firstNum);
            char second = iAsString.charAt(1);
            String secondNum = second + "";
            int num2 = Integer.parseInt(secondNum);
            char third = iAsString.charAt(2);
            String thirdNum = third + "";
            int num3 = Integer.parseInt(thirdNum);
            char forth = iAsString.charAt(3);
            String forthNum = forth + "";
            int num4 = Integer.parseInt(forthNum);
            if (num1 == 0 || num2 == 0 || num3 == 0 || num4 == 0) {
            } else {
                if (num % num1 == 0 && num % num2 == 0 && num % num3 == 0 && num % num4 == 0) {
                    System.out.printf("%d ", i);
                }

            }
        }
    }
}