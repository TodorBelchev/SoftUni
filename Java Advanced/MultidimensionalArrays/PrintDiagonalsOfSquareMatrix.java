package MultidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class PrintDiagonalsOfSquareMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int[][] matrix = readMatrix(n, n, scanner);
        int[] firstDiagonal = new int[n];
        int[] secondDiagonal = new int[n];

        for (int i = 0; i < n; i++) {
            firstDiagonal[i] = matrix[i][i];
            secondDiagonal[i] = matrix[matrix.length - 1 - i][i];
        }
        Arrays.stream(firstDiagonal).forEach(x -> {
            System.out.print(x + " ");
        });
        System.out.println();
        Arrays.stream(secondDiagonal).forEach(x -> {
            System.out.print(x + " ");
        });
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
}
