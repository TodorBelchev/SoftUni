import java.util.Scanner;

public class TheMostPowerfulWord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String word = scanner.nextLine();

        int bestSum = 0;
        String bestWord = "";

        while (!word.equals("End of words")) {
            int sum = 0;
            for (int i = 0; i < word.length(); i++) {
                sum += word.charAt(i);
            }
            if (word.toLowerCase().charAt(0) == 'a' || word.toLowerCase().charAt(0) == 'e' ||
                    word.toLowerCase().charAt(0) == 'i' || word.toLowerCase().charAt(0) == 'o' || word.toLowerCase().charAt(0) == 'u' || word.toLowerCase().charAt(0) == 'y') {
                sum *= word.length();
            } else {
                sum = (int) Math.floor(sum * 1.0 / word.length());
            }
            if (sum > bestSum) {
                bestSum = sum;
                bestWord = word;
            }
            word = scanner.nextLine();
        }
        System.out.printf("The most powerful word is %s - %d", bestWord, bestSum);
    }
}
