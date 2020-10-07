import java.util.Scanner;

public class WeddingSeats {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String lastSector = scanner.nextLine();
        int rows = Integer.parseInt(scanner.nextLine());
        int placesOddRows = Integer.parseInt(scanner.nextLine());
        int placesEvenRows = placesOddRows + 2;
        String Alphabet = "abcdefghijklmnopqrstuvwxyz";
        int combinationsCount = 0;
        for (char i = 'A'; i <= lastSector.charAt(0); i++) {
            for (int row = 1; row <= rows; row++) {
                if (row % 2 == 0) {
                    for (char evenPlaces = 'a'; evenPlaces < Alphabet.charAt(placesEvenRows); evenPlaces++) {
                        System.out.printf("%c%d%c%n", i, row, evenPlaces);
                        combinationsCount++;
                    }
                } else {
                    for (char oddPlaces = 'a'; oddPlaces < Alphabet.charAt(placesOddRows); oddPlaces++) {
                        System.out.printf("%c%d%c%n", i, row, oddPlaces);
                        combinationsCount++;
                    }
                }
            }
            rows++;
        }
        System.out.println(combinationsCount);
    }
}
