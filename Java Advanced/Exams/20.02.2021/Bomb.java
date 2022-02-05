import java.util.Scanner;

public class Bomb {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int bombsCount;
    public static int bombsDefused;
    public static boolean reachedEnd;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        String[] commands = scanner.nextLine().split(",");
        matrix = readMatrix(rows, scanner);

        for (String command : commands) {
            if (reachedEnd || bombsCount == bombsDefused) {
                break;
            }

            move(command);
        }

        if (reachedEnd) {
            System.out.printf("END! %d bombs left on the field", bombsCount - bombsDefused);
        } else if (bombsCount == bombsDefused) {
            System.out.println("Congratulations! You found all bombs!");
        } else {
            System.out.printf("%d bombs left on the field. Sapper position: (%d,%d)", bombsCount - bombsDefused, row, col);
        }
    }

    public static void move(String command) {
        int newRow = row;
        int newCol = col;

        switch (command) {
            case "up":
                newRow = ensureIndex(newRow - 1, newRow);
                break;
            case "down":
                newRow = ensureIndex(newRow + 1, newRow);
                break;
            case "left":
                newCol = ensureIndex(newCol - 1, newCol);
                break;
            case "right":
                newCol = ensureIndex(newCol + 1, newCol);
                break;
        }

        if (matrix[newRow][newCol] == 'B') {
            bombsDefused++;
            matrix[row][col] = '+';
            matrix[newRow][newCol] = 's';
            row = newRow;
            col = newCol;
            System.out.println("You found a bomb!");
        } else if (matrix[newRow][newCol] == 'e') {
            reachedEnd = true;
        } else {
            matrix[row][col] = '+';
            matrix[newRow][newCol] = 's';
            row = newRow;
            col = newCol;
        }

    }

    public static int ensureIndex(int newIndex, int oldIndex) {
        if (newIndex < 0 || newIndex > matrix.length - 1) {
            return oldIndex;
        }

        return newIndex;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("\\s+");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 's') {
                    row = i;
                    col = j;
                }
                if (curr == 'B') {
                    bombsCount++;
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
