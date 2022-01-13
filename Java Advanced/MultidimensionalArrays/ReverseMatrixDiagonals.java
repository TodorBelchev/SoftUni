package MultidimensionalArrays;

import java.util.Scanner;

public class ReverseMatrixDiagonals {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        int rows = Integer.parseInt(input[0]);
        int col = Integer.parseInt(input[1]);
        String[][] matrix = readMatrix(rows, col, scanner);
        int cols = col;
        if (col > 1) {
            while (cols > 0) {
                int currentCol = cols - 1;
                int currentRow = rows - 1;
                while (currentCol < col && currentRow >= 0) {
                    System.out.print(matrix[currentRow][currentCol] + " ");
                    currentCol++;
                    currentRow--;
                }
                System.out.println();
                cols--;
            }

            int row = matrix.length - 1;
            while (row > 0) {
                int currentRow = row - 1;
                int currentCol = 0;
                while (currentRow >= 0) {
                    if (currentCol >= matrix[currentRow].length) {
                        break;
                    }
                    System.out.print(matrix[currentRow][currentCol] + " ");
                    currentCol++;
                    currentRow--;
                }
                System.out.println();

                row--;
            }
        } else {
            for (int index = matrix.length - 1; index >= 0; index--) {
                System.out.println(matrix[index][0] + " ");
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
}
