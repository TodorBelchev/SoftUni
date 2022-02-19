import java.util.Scanner;

public class PawnShop {
    public static char[][] matrix;
    public static int rowWhite;
    public static int colWhite;
    public static int rowBlack;
    public static int colBlack;
    public static boolean isGameOver;
    public static boolean isWhiteMove;
    public static int rows = 8;
    public static String[] positions = {"a", "b", "c", "d", "e", "f", "g", "h"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        isGameOver = false;
        isWhiteMove = true;

        matrix = readMatrix(rows, scanner);

        while (!isGameOver) {
            move();
        }

    }

    public static void move() {
        if (isWhiteMove) {
            if ((isInBounds(rowWhite - 1, colWhite - 1) && matrix[rowWhite - 1][colWhite - 1] == 'b') ||
                    (isInBounds(rowWhite - 1, colWhite + 1) && matrix[rowWhite - 1][colWhite + 1] == 'b')) {
                isGameOver = true;
                System.out.printf("Game over! White capture on %s%d.%n", positions[colBlack], 8 - rowBlack);
            } else {
                matrix[rowWhite][colWhite] = '-';
                rowWhite--;
                matrix[rowWhite][colWhite] = 'w';
            }
            if (rowWhite == 0) {
                isGameOver = true;
                System.out.printf("Game over! White pawn is promoted to a queen at %s%d.%n", positions[colWhite], 8 - rowWhite);
            }
        } else {
            if ((isInBounds(rowBlack + 1, colBlack - 1) && matrix[rowBlack + 1][colBlack - 1] == 'w') ||
                    (isInBounds(rowBlack + 1, colBlack + 1) && matrix[rowBlack + 1][colBlack + 1] == 'w')) {
                isGameOver = true;
                System.out.printf("Game over! Black capture on %s%d.%n", positions[colWhite], 8 - rowWhite);
            } else {
                matrix[rowBlack][colBlack] = '-';
                rowBlack++;
                matrix[rowBlack][colBlack] = 'b';
            }
            if (rowBlack == 7) {
                isGameOver = true;
                System.out.printf("Game over! Black pawn is promoted to a queen at %s%d.%n", positions[colBlack], 8 - rowBlack);
            }
        }

        isWhiteMove = !isWhiteMove;
    }

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 'b') {
                    rowBlack = i;
                    colBlack = j;
                }
                if (curr == 'w') {
                    rowWhite = i;
                    colWhite = j;
                }
            }
        }
        return matrix;
    }
}
