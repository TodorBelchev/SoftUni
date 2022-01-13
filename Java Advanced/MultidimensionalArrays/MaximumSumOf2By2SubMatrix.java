package MultidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class MaximumSumOf2By2SubMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(", ");
        int rows = Integer.parseInt(input[0]);
        int cols = Integer.parseInt(input[1]);
        int[][] matrix = readMatrix(rows, cols, scanner);
        int[][] biggestMatrix = new int[2][2];
        int sum = 0;
        for (int row = 0; row < matrix.length - 1; row++) {
            for (int col = 0; col < matrix[row].length - 1; col++) {
                int currentSum = matrix[row][col] + matrix[row][col + 1] + matrix[row + 1][col] + matrix[row + 1][col + 1];
                if (currentSum > sum) {
                    sum = currentSum;
                    biggestMatrix[0][0] = matrix[row][col];
                    biggestMatrix[0][1] = matrix[row][col + 1];
                    biggestMatrix[1][0] = matrix[row + 1][col];
                    biggestMatrix[1][1] = matrix[row + 1][col + 1];
                }
            }
        }
        for (int row = 0; row < biggestMatrix.length; row++) {
            for (int col = 0; col < biggestMatrix[row].length; col++) {
                System.out.print(biggestMatrix[row][col] + " ");
            }
            System.out.println();
        }
        System.out.println(sum);
    }

    public static int[][] readMatrix(int rows, int cols, Scanner scanner) {
        int[][] matrix = new int[rows][cols];
        for (int i = 0; i < rows; i++) {
            int[] colData = Arrays.stream(scanner.nextLine().split(", "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = colData;
        }
        return matrix;
    }
}
