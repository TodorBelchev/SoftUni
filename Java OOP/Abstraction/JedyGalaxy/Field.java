package abstraction.jedy_galaxy;

public class Field {
    private int[][] matrix;

    public Field(int rows, int cols) {
        this.matrix = new int[rows][cols];
        this.fillValues(0);
    }

    private void fillValues(int beginValue) {
        for (int row = 0; row < this.matrix.length; row++) {
            for (int col = 0; col < this.matrix[row].length; col++) {
                this.matrix[row][col] = beginValue++;
            }
        }
    }

    public void moveEvil(int evilX, int evilY) {
        while (evilX >= 0 && evilY >= 0) {
            if (evilX < this.matrix.length && evilY < this.matrix[0].length) {
                matrix[evilX][evilY] = 0;
            }
            evilX--;
            evilY--;
        }
    }

    public int collectJediPower(int goodX, int goodY) {
        int power = 0;
        while (goodX >= 0 && goodY < this.matrix[0].length) {
            if (goodX < this.matrix.length && goodY >= 0) {
                power += matrix[goodX][goodY];
            }

            goodY++;
            goodX--;
        }
        return power;
    }
}
