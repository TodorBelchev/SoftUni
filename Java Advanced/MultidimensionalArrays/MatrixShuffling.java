package MultidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class MatrixShuffling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        int rows = Integer.parseInt(input[0]);
        int cols = Integer.parseInt(input[1]);
        String[][] matrix = readMatrix(rows, cols, scanner);
        String[] command = scanner.nextLine().split("\\s+");

        while (!command[0].equals("END")) {
            if (command.length != 5 || !command[0].equals("swap")) {
                System.out.println("Invalid input!");
                command = scanner.nextLine().split("\\s+");
                continue;
            }
            int firstRow = Integer.parseInt(command[1]);
            int firstCol = Integer.parseInt(command[2]);
            int secondRow = Integer.parseInt(command[3]);
            int secondCol = Integer.parseInt(command[4]);
            if (!isInBounds(firstRow, firstCol, matrix) || !isInBounds(secondRow, secondCol, matrix)) {
                System.out.println("Invalid input!");
                command = scanner.nextLine().split("\\s+");
                continue;
            }
            String temp = matrix[firstRow][firstCol];
            matrix[firstRow][firstCol] = matrix[secondRow][secondCol];
            matrix[secondRow][secondCol] = temp;
            printMatrix(matrix);

            command = scanner.nextLine().split("\\s+");
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

    public static void printMatrix(String[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }

    public static boolean isInBounds(int row, int col, String[][] matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }
}
