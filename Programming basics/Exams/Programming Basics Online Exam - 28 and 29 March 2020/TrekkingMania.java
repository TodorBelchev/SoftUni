import java.util.Scanner;

public class TrekkingMania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int groupsCount = Integer.parseInt(scanner.nextLine());

        int musalaGroup = 0;
        int monblanGroup = 0;
        int kilimGroup = 0;
        int k2Group = 0;
        int everestGroup = 0;

        for (int i = 1; i <= groupsCount; i++) {
            int pplInGroup = Integer.parseInt(scanner.nextLine());

            if (pplInGroup <= 5) {
                musalaGroup += pplInGroup;
            } else if (pplInGroup >= 6 && pplInGroup <= 12) {
                monblanGroup += pplInGroup;
            } else if (pplInGroup >= 13 && pplInGroup <= 25) {
                kilimGroup += pplInGroup;
            } else if (pplInGroup >= 26 && pplInGroup <= 40) {
                k2Group += pplInGroup;
            } else if (pplInGroup >= 41) {
                everestGroup += pplInGroup;
            }

        }

        double allPpl = musalaGroup + monblanGroup + kilimGroup + k2Group + everestGroup;
        double percentMusala = (musalaGroup / allPpl) * 100;
        double percentMonblan = (monblanGroup / allPpl) * 100;
        double percentKilim = (kilimGroup / allPpl) * 100;
        double percentK2 = (k2Group / allPpl) * 100;
        double percentEverest = (everestGroup / allPpl) * 100;
        
        System.out.printf("%.2f%%%n", percentMusala);
        System.out.printf("%.2f%%%n", percentMonblan);
        System.out.printf("%.2f%%%n", percentKilim);
        System.out.printf("%.2f%%%n", percentK2);
        System.out.printf("%.2f%%", percentEverest);
    }
}

