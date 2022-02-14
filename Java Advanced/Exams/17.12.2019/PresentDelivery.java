import java.util.Scanner;

public class PresentDelivery {
    public static char[][] neighborhood;

    public static int SantaRow;
    public static int SantaCol;

    public static int countOfPresents;
    public static int niceKids = 0;
    public static int countNiceKids = 0;
    public static int kidsWithPresents = 0;

    public static boolean ranOutOfPresents = false;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        countOfPresents = Integer.parseInt(scanner.nextLine());
        int size = Integer.parseInt(scanner.nextLine());

        neighborhood = new char[size][size];

        readNeighborhood(scanner);

        String direction = scanner.nextLine();
        while (!direction.equals("Christmas morning")) {

            neighborhood[SantaRow][SantaCol] = '-';
            moveSanta(direction);

            if (ranOutOfPresents) {
                System.out.println("Santa ran out of presents!");
                break;
            }

            direction = scanner.nextLine();
        }

        printNeighborhood();

        if (niceKids == 0) {
            System.out.printf("Good job, Santa! %d happy nice kid/s.%n", kidsWithPresents);

        } else {
            System.out.printf("No presents for %d nice kid/s.%n", countNiceKids - kidsWithPresents);
        }
    }

    private static void moveSanta(String direction) {
        int row = SantaRow;
        int col = SantaCol;

        switch (direction) {
            case "up":
                row--;
                break;

            case "down":
                row++;
                break;

            case "left":
                col--;
                break;

            case "right":
                col++;
                break;
        }

        boolean inBounds = checkIfInBounds(row, col);

        if (inBounds) {
            char currentCell = neighborhood[row][col];

            switch (currentCell) {
                case 'V':
                    kidsWithPresents++;
                    niceKids--;
                    countOfPresents--;

                    if (countOfPresents <= 0) {
                        ranOutOfPresents = true;
                    }
                    break;

                case 'C':
                    givePresents(row, col);
                    break;
            }
        }

        SantaRow = row;
        SantaCol = col;

        neighborhood[SantaRow][SantaCol] = 'S';
    }

    private static void givePresents(int row, int col) {
        char up = neighborhood[row - 1][col];
        char down = neighborhood[row + 1][col];

        char left = neighborhood[row][col - 1];
        char right = neighborhood[row][col + 1];

        char[] cells = new char[4];

        cells[0] = up;
        cells[1] = down;
        cells[2] = left;
        cells[3] = right;

        for (char cell : cells) {
            if ((cell == 'V') || (cell == 'X')) {
                if (cell == 'V') {
                    niceKids--;
                }

                kidsWithPresents++;
                countOfPresents--;

                if (countOfPresents <= 0) {
                    ranOutOfPresents = true;
                    break;
                }
            }
        }

        neighborhood[row - 1][col] = '-';
        neighborhood[row + 1][col] = '-';
        neighborhood[row][col - 1] = '-';
        neighborhood[row][col + 1] = '-';
    }

    private static boolean checkIfInBounds(int row, int col) {
        return (row >= 0) && (row < neighborhood.length) &&
                (col >= 0) && (col < neighborhood[row].length);
    }

    private static void readNeighborhood(Scanner scanner) {
        for (int row = 0; row < neighborhood.length; row++) {
            String[] elements = scanner.nextLine().split("[\\s]+");

            for (int col = 0; col < elements.length; col++) {
                char currentChar = elements[col].charAt(0);

                if (currentChar == 'S') {
                    SantaRow = row;
                    SantaCol = col;
                }

                if (currentChar == 'V') {
                    niceKids++;
                    countNiceKids++;
                }

                neighborhood[row][col] = currentChar;
            }
        }
    }

    private static void printNeighborhood() {
        for (char[] row : neighborhood) {
            for (char col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }
}
