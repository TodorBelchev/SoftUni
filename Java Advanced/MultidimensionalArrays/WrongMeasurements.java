package MultidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class WrongMeasurements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        int[][] matrix = readMatrix(rows, rows, scanner);
        int[] coordinates = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        int wrongNumber = matrix[coordinates[0]][coordinates[1]];
        int[][] resultMatrix = new int[rows][matrix[1].length];

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                int number = matrix[row][col];
                if (number == wrongNumber) {
                    number = rightNumber(matrix, row, col);
                }
                resultMatrix[row][col] = number;
            }
        }

        for (int row = 0; row < resultMatrix.length; row++) {
            for (int col = 0; col < resultMatrix[row].length; col++) {
                System.out.print(resultMatrix[row][col] + " ");
            }
            System.out.println();
        }
    }

    public static int[][] readMatrix(int rows, int cols, Scanner scanner) {
        int[][] matrix = new int[rows][cols];
        for (int i = 0; i < rows; i++) {
            int[] colData = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = colData;
        }
        return matrix;
    }

    public static int rightNumber(int[][] matrix, int row, int col) {
        int rightNumber = 0;
        if (row - 1 >= 0) {
            if (matrix[row - 1][col] != matrix[row][col]) {
                rightNumber += matrix[row - 1][col];
            }
        }

        if (row + 1 < matrix.length) {
            if (matrix[row + 1][col] != matrix[row][col]) {
                rightNumber += matrix[row + 1][col];
            }
        }

        if (col - 1 >= 0) {
            if (matrix[row][col - 1] != matrix[row][col]) {
                rightNumber += matrix[row][col - 1];
            }
        }

        if (col + 1 < matrix[1].length) {
            if (matrix[row][col + 1] != matrix[row][col]) {
                rightNumber += matrix[row][col + 1];
            }
        }

        return rightNumber;
    }
}
