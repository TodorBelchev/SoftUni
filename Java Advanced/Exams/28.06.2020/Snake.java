import java.util.Scanner;

public class Snake {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int foodEaten;
    public static int totalFood;
    public static boolean isInMatrix;
    public static int[] pillars;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        pillars = new int[4];
        matrix = readMatrix(rows, scanner);
        foodEaten = 0;
        isInMatrix = true;
        getFoodCount();
        while (isInMatrix && foodEaten < 10) {
            String command = scanner.nextLine();

            move(command);
        }

        if (!isInMatrix) {
            System.out.println("Game over!");
        }
        if (foodEaten == 10) {
            System.out.println("You won! You fed the snake.");
        }
        System.out.println("Food eaten: " + foodEaten);
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

        matrix[row][col] = '.';

        if (!isInBounds(newRow, newCol)) {
            isInMatrix = false;
            return;
        }

        if (matrix[newRow][newCol] == '*') {
            foodEaten++;
            matrix[newRow][newCol] = 'S';
            row = newRow;
            col = newCol;
        } else if (matrix[newRow][newCol] == 'B') {
            if (newRow == pillars[0] && newCol == pillars[1]) {
                matrix[pillars[2]][pillars[3]] = 'S';
                row = pillars[2];
                col = pillars[3];
            } else {
                matrix[pillars[0]][pillars[1]] = 'S';
                row = pillars[0];
                col = pillars[1];
            }
            matrix[newRow][newCol] = '.';
        } else {
            matrix[newRow][newCol] = 'S';
            row = newRow;
            col = newCol;
        }
    }

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    public static void getFoodCount() {
        int food = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                if (matrix[i][j] == '*') {
                    food++;
                }
            }
        }
        totalFood = food;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        int pillarIndex = 0;
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 'S') {
                    row = i;
                    col = j;
                }
                if (curr == 'B') {
                    pillars[pillarIndex] = i;
                    pillars[pillarIndex + 1] = j;
                    pillarIndex += 2;
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
