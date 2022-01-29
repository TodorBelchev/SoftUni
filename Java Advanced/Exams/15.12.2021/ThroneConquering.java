import java.util.Scanner;

public class ThroneConquering {
    public static char[][] matrix;
    public static boolean reachedHelen;
    public static int ParisRow = 0;
    public static int ParisCol = 0;
    public static int energy;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        energy = Integer.parseInt(scanner.nextLine());
        int rows = Integer.parseInt(scanner.nextLine());
        matrix = readMatrix(rows, rows, scanner);
        reachedHelen = false;
        findParis();

        while (energy > 0) {
            if (reachedHelen) {
                break;
            }
            String[] commands = scanner.nextLine().split("\\s+");
            int spartanRow = Integer.parseInt(commands[1]);
            int spartanCol = Integer.parseInt(commands[2]);
            matrix[spartanRow][spartanCol] = 'S';
            energy--;
            move(commands[0]);

        }
        if (energy <= 0) {
            System.out.printf("Paris died at %d;%d.%n", ParisRow, ParisCol);
        }
        if (reachedHelen) {
            System.out.println("Paris has successfully abducted Helen! Energy left: " + energy);
        }

        printMatrix(matrix);
    }

    public static void move(String direction) {
        int newRow = ParisRow;
        int newCol = ParisCol;

        if (direction.equals("up")) {
            newRow--;
        } else if (direction.equals("down")) {
            newRow++;
        } else if (direction.equals("left")) {
            newCol--;
        } else if (direction.equals("right")) {
            newCol++;
        }

        if (isInBounds(newRow, newCol)) {
            matrix[ParisRow][ParisCol] = '-';

            ParisRow = newRow;
            ParisCol = newCol;

            char cellValue = matrix[ParisRow][ParisCol];

            if (cellValue == 'S') {
                energy -= 2;
                if (energy <= 0) {
                    matrix[ParisRow][ParisCol] = 'X';
                } else {
                    matrix[ParisRow][ParisCol] = 'P';
                }
            } else if (cellValue == 'H') {
                reachedHelen = true;
                matrix[ParisRow][ParisCol] = '-';
            } else if (cellValue == '-') {
                if (energy > 0) {
                    matrix[ParisRow][ParisCol] = 'P';
                } else {
                    matrix[ParisRow][ParisCol] = 'X';
                }
            }
        }
    }

    public static boolean isInBounds(int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    private static void findParis() {
        boolean hasBeenFound = false;

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {

                if (matrix[row][col] == 'P') {
                    ParisRow = row;
                    ParisCol = col;

                    hasBeenFound = true;
                    break;
                }
            }

            if (hasBeenFound) {
                break;
            }
        }
    }

    public static char[][] readMatrix(int rows, int cols, Scanner scanner) {
        char[][] matrix = new char[rows][cols];
        for (int i = 0; i < rows; i++) {
            char[] colData = scanner.nextLine().toCharArray();
            matrix[i] = colData;
        }
        return matrix;
    }

    public static void printMatrix(char[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col]);
            }
            System.out.println();
        }
    }
}
