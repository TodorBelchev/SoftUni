import java.util.Scanner;

public class ChallengeTheWedding {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int manCount = Integer.parseInt(scanner.nextLine());
        int womanCount = Integer.parseInt(scanner.nextLine());
        int tableCount = Integer.parseInt(scanner.nextLine());
        int takenTables = 0;
        for (int i = 1; i <= manCount; i++) {
            for (int j = 1; j <= womanCount; j++) {
                System.out.printf("(%d <-> %d) ", i, j);
                takenTables++;
                if (takenTables == tableCount) {
                    return;
                }
            }
        }
    }
}
