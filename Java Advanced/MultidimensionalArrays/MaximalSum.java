package MultidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class MaximalSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        int rows = Integer.parseInt(input[0]);
        int cols = Integer.parseInt(input[1]);
        int[][] matrix = readMatrix(rows, cols, scanner);
        int[][] biggestMatrix = new int[3][3];
        int sum = 0;
        for (int row = 0; row < matrix.length; row++) {
            if (row + 2 >= rows) {
                break;
            }
            for (int col = 0; col < matrix[row].length; col++) {
                if (col + 2 >= cols) {
                    break;
                }
                int currentSum = matrix[row][col] + matrix[row][col + 1] + matrix[row][col + 2] + matrix[row + 1][col] + matrix[row + 1][col + 1] + matrix[row + 1][col + 2] + matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2];
                if (currentSum > sum) {
                    sum = currentSum;
                    biggestMatrix[0][0] = matrix[row][col];
                    biggestMatrix[0][1] = matrix[row][col + 1];
                    biggestMatrix[0][2] = matrix[row][col + 2];
                    biggestMatrix[1][0] = matrix[row + 1][col];
                    biggestMatrix[1][1] = matrix[row + 1][col + 1];
                    biggestMatrix[1][2] = matrix[row + 1][col + 2];
                    biggestMatrix[2][0] = matrix[row + 2][col];
                    biggestMatrix[2][1] = matrix[row + 2][col + 1];
                    biggestMatrix[2][2] = matrix[row + 2][col + 2];
                }
            }
        }
        System.out.println("Sum = " + sum);
        printMatrix(biggestMatrix);
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

    public static void printMatrix(int[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
