import java.util.Scanner;

public class Selling {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int[] pillars;
    public static boolean isInMatrix;
    public static int income;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        isInMatrix = true;
        income = 0;
        pillars = new int[4];
        matrix = readMatrix(n, scanner);

        while (isInMatrix && income < 50) {
            String command = scanner.nextLine();
            move(command);
        }
        if (income < 50) {
            System.out.println("Bad news, you are out of the bakery.");
        } else {
            System.out.println("Good news! You succeeded in collecting enough money!");
        }
        System.out.println("Money: " + income);
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

        matrix[row][col] = '-';

        if (!isInBounds(newRow, newCol)) {
            isInMatrix = false;
            return;
        }

        if (matrix[newRow][newCol] == 'O') {
            if (newRow == pillars[0] && newCol == pillars[1]) {
                matrix[pillars[2]][pillars[3]] = 'S';
                row = pillars[2];
                col = pillars[3];
            } else {
                matrix[pillars[0]][pillars[1]] = 'S';
                row = pillars[0];
                col = pillars[1];
            }
            matrix[newRow][newCol] = '-';
        } else if (Character.isDigit(matrix[newRow][newCol])) {
            income += Integer.parseInt(matrix[newRow][newCol] + "");
            matrix[newRow][newCol] = 'S';
            row = newRow;
            col = newCol;
        } else {
            matrix[newRow][newCol] = 'S';
            row = newRow;
            col = newCol;
        }
    }

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
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
                if (curr == 'O') {
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
