import java.util.Scanner;

public class Python {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int foodEaten;
    public static int totalFood;
    public static boolean hitEnemy;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        String[] commands = scanner.nextLine().split(", ");
        matrix = readMatrix(rows, scanner);
        foodEaten = 0;
        hitEnemy = false;
        getFoodCount();
        for (String command : commands) {
            move(command);
            if (hitEnemy) {
                break;
            }
            if (foodEaten == totalFood) {
                break;
            }
        }

        if (hitEnemy) {
            System.out.println("You lose! Killed by an enemy!");
        } else if (totalFood > foodEaten) {
            System.out.printf("You lose! There is still %d food to be eaten.%n", totalFood - foodEaten);
        } else {
            System.out.println("You win! Final python length is " + (foodEaten + 1));
        }
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
        int[] ensuredIndexes = ensureIndex(newRow, newCol);
        newRow = ensuredIndexes[0];
        newCol = ensuredIndexes[1];

        if (matrix[newRow][newCol] == 'f') {
            foodEaten++;
            matrix[row][col] = '*';
            matrix[newRow][newCol] = 's';
            row = newRow;
            col = newCol;
        } else if (matrix[newRow][newCol] == 'e') {
            hitEnemy = true;
        } else {
            matrix[row][col] = '*';
            matrix[newRow][newCol] = 's';
            row = newRow;
            col = newCol;
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

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    public static void getFoodCount() {
        int food = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                if (matrix[i][j] == 'f') {
                    food++;
                }
            }
        }
        totalFood = food;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split(" ");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 's') {
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
