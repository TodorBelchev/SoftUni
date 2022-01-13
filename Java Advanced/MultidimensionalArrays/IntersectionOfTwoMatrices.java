package MultidimensionalArrays;

import java.util.Scanner;

public class IntersectionOfTwoMatrices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        int cols = Integer.parseInt(scanner.nextLine());
        String[][] firstMatrix = readMatrix(rows, cols, scanner);
        String[][] secondMatrix = readMatrix(rows, cols, scanner);
        String[][] thirdMatrix = new String[rows][cols];

        for (int row = 0; row < firstMatrix.length; row++) {
            for (int col = 0; col < firstMatrix[row].length; col++) {
                if (firstMatrix[row][col].equals(secondMatrix[row][col])) {
                    thirdMatrix[row][col] = firstMatrix[row][col];
                } else {
                    thirdMatrix[row][col] = "*";
                }
            }
        }

        for (int row = 0; row < thirdMatrix.length; row++) {
            for (int col = 0; col < thirdMatrix[row].length; col++) {
                System.out.print(thirdMatrix[row][col] + " ");
            }
            System.out.println();
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
