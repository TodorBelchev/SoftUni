package exams.Exam23Oct2021;

import java.util.Scanner;

public class MouseAndCheese {
    public static char[][] matrix;
    public static int row;
    public static int col;
    public static int cheeseEaten = 0;
    public static boolean isGone = false;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        matrix = readMatrix(rows, scanner);
        String command = scanner.nextLine();

        while (!command.equals("end")) {
            matrix[row][col] = '-';
            move(command);

            if (isGone) {
                break;
            }

            command = scanner.nextLine();
        }

        if (isGone) {
            System.out.println("Where is the mouse?");
        }
        if (cheeseEaten < 5) {
            System.out.printf("The mouse couldn't eat the cheeses, she needed %d cheeses more.%n", 5 - cheeseEaten);
        } else {
            System.out.printf("Great job, the mouse is fed %d cheeses!%n", cheeseEaten);
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

        if (isInBounds(newRow, newCol)) {
            char currentCell = matrix[newRow][newCol];

            switch (currentCell) {
                case 'c':
                    cheeseEaten++;
                    break;

                case 'B':
                    matrix[newRow][newCol] = '-';

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

                    if (matrix[newRow][newCol] == 'c') {
                        cheeseEaten++;
                    }
                    break;
            }

            row = newRow;
            col = newCol;

            matrix[row][col] = 'M';
        } else {
            isGone = true;
        }

    }

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    public static char[][] readMatrix(int rows, Scanner scanner) {
        char[][] matrix = new char[rows][rows];
        for (int i = 0; i < matrix.length; i++) {
            String[] colData = scanner.nextLine().split("");
            for (int j = 0; j < colData.length; j++) {
                char curr = colData[j].charAt(0);
                matrix[i][j] = curr;
                if (curr == 'M') {
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
