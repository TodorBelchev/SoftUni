import java.util.Scanner;

public class ReVolt {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static boolean isFinished = false;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        int commandsCount = Integer.parseInt(scanner.nextLine());
        matrix = readMatrix(rows, scanner);

        while (commandsCount-- > 0 && !isFinished) {
            String command = scanner.nextLine();
            move(command);
        }

        if (isFinished) {
            System.out.println("Player won!");
        } else {
            System.out.println("Player lost!");
        }
        printMatrix();
    }

    public static void move(String direction) {
        int newRow = row;
        int newCol = col;

        switch (direction) {
            case "up":
                newRow--;
                break;
            case "down":
                newRow++;
                break;
            case "left":
                newCol--;
                break;
            case "right":
                newCol++;
                break;
        }

        int[] ensuredIndex = ensureIndex(newRow, newCol);
        newRow = ensuredIndex[0];
        newCol = ensuredIndex[1];

        if (matrix[newRow][newCol] == 'B') {
            matrix[row][col] = '-';
            row = newRow;
            col = newCol;
            move(direction);
        } else if (matrix[newRow][newCol] == '-') {
            if (matrix[row][col] != 'B') {
                matrix[row][col] = '-';
            }
            matrix[newRow][newCol] = 'f';
            row = newRow;
            col = newCol;
        } else if (matrix[newRow][newCol] == 'F') {
            if (matrix[row][col] != 'B') {
                matrix[row][col] = '-';
            }
            matrix[newRow][newCol] = 'f';
            isFinished = true;
        }

    }

    public static int[] ensureIndex(int row, int col) {
        if (col >= matrix.length) {
            col = 0;
        }

        if (col < 0) {
            col = matrix.length - 1;
        }

        if (row >= matrix.length) {
            row = 0;
        }

        if (row < 0) {
            row = matrix.length - 1;
        }
        return new int[]{row, col};
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 'f') {
                    row = i;
                    col = j;
                }
            }
        }
        return matrix;
    }

    public static void printMatrix() {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                System.out.print(matrix[i][j]);
            }
            System.out.println();
        }
    }
}
