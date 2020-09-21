import java.util.Scanner;

public class PipesInPool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int volume = Integer.parseInt(scanner.nextLine());
        int firstPipeDebit = Integer.parseInt(scanner.nextLine());
        int secondPipeDebit = Integer.parseInt(scanner.nextLine());
        double missingHours = Double.parseDouble(scanner.nextLine());

        double volumeFirstPipe = firstPipeDebit * missingHours;
        double volumeSecondPipe = secondPipeDebit * missingHours;
        double totalFilledVolume = volumeFirstPipe + volumeSecondPipe;
        double percentFilled = (totalFilledVolume / volume) * 100;
        double percentForFirst = (volumeFirstPipe / totalFilledVolume) * 100;

        if (volume >= totalFilledVolume) {
            System.out.printf("The pool is %.2f%% full. Pipe 1: %.2f%%. Pipe 2: %.2f%%.", percentFilled, percentForFirst, 100 - percentForFirst);
        } else {
            System.out.printf("For %.2f hours the pool overflows with %.2f liters.", missingHours, totalFilledVolume - volume);
        }
    }
}
