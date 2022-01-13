package MultidimensionalArrays;

import java.util.Scanner;

public class FillTheMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(", ");
        int dimensions = Integer.parseInt(input[0]);
        String pattern = input[1];
        int[][] matrix;
        if (pattern.equals("A")) {
            matrix = fillMatrixPatternA(dimensions);
        } else {
            matrix = fillMatrixPatternB(dimensions);
        }
        printMatrix(matrix);
    }

    public static int[][] fillMatrixPatternA(int dimensions) {
        int[][] matrix = new int[dimensions][dimensions];
        int number = 1;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                matrix[col][row] = number;
                number++;
            }
        }

        return matrix;
    }

    public static int[][] fillMatrixPatternB(int dimensions) {
        int[][] matrix = new int[dimensions][dimensions];
        int number = 1;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                if (row % 2 != 0) {
                    matrix[dimensions - col - 1][row] = number;
                } else {
                    matrix[col][row] = number;
                }
                number++;
            }
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
