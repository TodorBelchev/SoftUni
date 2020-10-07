import java.util.Scanner;

public class LettersCombinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String firstChar = scanner.nextLine();
        String lastChar = scanner.nextLine();
        String skipChar = scanner.nextLine();
        int combinationsCounter = 0;

        for (char i = firstChar.charAt(0); i <= lastChar.charAt(0); i++) {
            for (char j = firstChar.charAt(0); j <= lastChar.charAt(0); j++) {
                for (char k = firstChar.charAt(0); k <= lastChar.charAt(0); k++) {
                    if (!skipChar.equals(Character.toString(i)) && !skipChar.equals(Character.toString(j)) && !skipChar.equals(Character.toString(k))) {
                        System.out.print(i + Character.toString(j) + Character.toString(k) + " ");
                        combinationsCounter++;
                    }
                }
            }
        }
        System.out.print(combinationsCounter);
    }
}
