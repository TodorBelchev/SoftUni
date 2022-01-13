package MultidimensionalArrays;

import java.util.Scanner;

public class TheHeiganDance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int playerRow = 7;
        int playerCol = 7;

        int playerHP = 18500;
        double bossHP = 3000000;
        double damagePerTurn = Double.parseDouble(scanner.nextLine());
        String spell = "";

        while (true) {
            if (playerHP >= 0) {
                bossHP -= damagePerTurn;
            }
            if (spell.equals("Cloud")) {
                playerHP -= 3500;
            }
            if (bossHP <= 0 || playerHP <= 0) {
                break;
            }

            String[] command = scanner.nextLine().split("\\s+");
            String currentSpell = command[0];
            int spellRow = Integer.parseInt(command[1]);
            int spellCol = Integer.parseInt(command[2]);
            if (isInRange(spellRow, spellCol, playerRow, playerCol)) {
                if (!isInRange(spellRow, spellCol, playerRow - 1, playerCol) && isInBounds(playerRow - 1)) {
                    playerRow--;
                    spell = "";
                } else if (!isInRange(spellRow, spellCol, playerRow, playerCol + 1) && isInBounds(playerCol + 1)) {
                    playerCol++;
                    spell = "";
                } else if (!isInRange(spellRow, spellCol, playerRow + 1, playerCol) && isInBounds(playerRow + 1)) {
                    playerRow++;
                    spell = "";
                } else if (!isInRange(spellRow, spellCol, playerRow, playerCol - 1) && isInBounds(playerCol - 1)) {
                    playerCol--;
                    spell = "";
                } else {
                    if (currentSpell.equals("Cloud")) {
                        playerHP -= 3500;
                        spell = "Cloud";
                    } else if (currentSpell.equals("Eruption")) {
                        playerHP -= 6000;
                        spell = "Eruption";
                    }
                }
            }
        }

        spell = spell.equals("Cloud") ? "Plague Cloud" : "Eruption";
        String bossState = bossHP <= 0 ? "Heigan: Defeated!" : String.format("Heigan: %.2f", bossHP);
        String playerState = playerHP <= 0 ? String.format("Player: Killed by %s", spell) :
                String.format("Player: %d", playerHP);
        String playerEndCoordinates = String.format("Final position: %d, %d", playerRow, playerCol);

        System.out.println(bossState);
        System.out.println(playerState);
        System.out.println(playerEndCoordinates);
    }

    public static boolean isInBounds(int index) {
        return index >= 0 && index <= 15;
    }

    public static boolean isInRange(int row, int col, int playerRow, int playerCol) {
        return ((row - 1 <= playerRow && playerRow <= row + 1) && (col - 1 <= playerCol && playerCol <= col + 1));
    }
}
