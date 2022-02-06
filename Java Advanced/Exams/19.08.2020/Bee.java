import java.util.Scanner;

public class Bee {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int flowers;
    public static boolean isInMatrix;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        matrix = readMatrix(rows, scanner);
        isInMatrix = true;
        String command = scanner.nextLine();

        while (!command.equals("End")) {
            move(command);

            if (!isInMatrix) {
                break;
            }

            command = scanner.nextLine();
        }

        if (!isInMatrix) {
            System.out.println("The bee got lost!");
        }

        if (flowers < 5) {
            System.out.printf("The bee couldn't pollinate the flowers, she needed %d flowers more%n", 5 - flowers);
        } else {
            System.out.printf("Great job, the bee manage to pollinate %d flowers!%n", flowers);
        }

        printMatrix();
    }

    public static void move(String command) {
        int newRow = row;
        int newCol = col;

        switch (command) {
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

        if (!isInBounds(newRow, newCol)) {
            isInMatrix = false;
            matrix[row][col] = '.';
            return;
        }

        if (matrix[newRow][newCol] == 'f') {
            flowers++;
            matrix[newRow][newCol] = 'B';
            matrix[row][col] = '.';
            row = newRow;
            col = newCol;
        } else if (matrix[newRow][newCol] == 'O') {
            matrix[newRow][newCol] = 'B';
            matrix[row][col] = '.';
            row = newRow;
            col = newCol;
            move(command);
        } else {
            matrix[newRow][newCol] = 'B';
            matrix[row][col] = '.';
            row = newRow;
            col = newCol;
        }

    }

    public static boolean isInBounds(int newRow, int newCol) {
        return newRow >= 0 && newRow < matrix.length && newCol >= 0 && newCol < matrix.length;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 'B') {
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
