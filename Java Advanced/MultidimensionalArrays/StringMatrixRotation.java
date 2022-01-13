package MultidimensionalArrays;

import java.util.ArrayList;
import java.util.Scanner;

public class StringMatrixRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\(");
        int degrees = Integer.parseInt(input[1].substring(0, input[1].length() - 1));
        ArrayList<String[]> words = new ArrayList<>();
        int maxCount = 0;
        String command = scanner.nextLine();
        while (!command.equals("END")) {
            String[] chars = command.split("");
            words.add(chars);
            if (maxCount < chars.length) {
                maxCount = chars.length;
            }
            command = scanner.nextLine();
        }
        String[][] matrix = new String[words.size()][maxCount];
        for (int i = 0; i < matrix.length; i++) {
            String[] current = words.get(i);
            for (int j = 0; j < matrix[i].length; j++) {
                if (j < current.length) {
                    matrix[i][j] = current[j];
                } else {
                    matrix[i][j] = " ";
                }
            }
        }

        int rotations = degrees / 90 % 4;

        for (int i = 0; i < rotations; i++) {
            matrix = rotate(matrix);
        }
        printMatrix(matrix);
    }

    public static String[][] rotate(String[][] matrix) {
        int rows = matrix[0].length;
        int cols = matrix.length;

        String[][] rotatedMatrix = new String[rows][cols];

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                rotatedMatrix[col][(cols - 1) - row] = matrix[row][col];
            }
        }

        return rotatedMatrix;
    }

    public static void printMatrix(String[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col]);
            }
            System.out.println();
        }
    }
}
