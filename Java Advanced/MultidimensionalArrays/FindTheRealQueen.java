package MultidimensionalArrays;

import java.util.Scanner;

public class FindTheRealQueen {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[][] matrix = readMatrix(8, 8, scanner);
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col].equals("q") && isRealQueen(matrix, row, col)) {
                    System.out.print(row + " " + col);
                }
            }
        }
    }

    public static String[][] readMatrix(int rows, int cols, Scanner scanner) {
        String[][] matrix = new String[rows][cols];
        for (int i = 0; i < rows; i++) {
            String[] colData = scanner.nextLine().split("\\s+");
            matrix[i] = colData;
        }
        return matrix;
    }

    public static boolean isRealQueen(String[][] matrix, int row, int col) {
        for (int i = 0; i < 8; i++) {
            if ((matrix[row][i].equals("q") && i != col) || (matrix[i][col].equals("q") && i != row)) {
                return false;
            }
        }

        int uldElement = col - 1;

        for (int i = row - 1; i >= 0 && uldElement >= 0; i--, uldElement--) {
            String charToCheck = matrix[i][uldElement];

            if (charToCheck.equals("q")) {
                return false;
            }
        }

        int urdElement = col + 1;

        for (int i = row - 1; i >= 0 && urdElement < matrix[i].length; i--, urdElement++) {
            String charToCheck = matrix[i][urdElement];

            if (charToCheck.equals("q")) {
                return false;
            }
        }

        int element = col - 1;

        for (int i = row + 1; i < matrix.length && element >= 0; i++, element--) {
            String charToCheck = matrix[i][element];

            if (charToCheck.equals("q")) {
                return false;
            }
        }

        int element1 = col + 1;

        for (int i = row + 1; i < matrix.length && element1 < matrix[row].length; i++, element1++) {
            String charToCheck = matrix[i][element1];

            if (charToCheck.equals("q")) {
                return false;
            }
        }

        return true;
    }
}
