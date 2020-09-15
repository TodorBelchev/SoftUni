import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogsCount = Integer.parseInt(scanner.nextLine());
        int otherPetsCount = Integer.parseInt(scanner.nextLine());
        double priceForDogs = dogsCount * 2.5;
        double priceForOtherPets = otherPetsCount * 4;
        double sum = priceForDogs + priceForOtherPets;
        System.out.printf("%.1f lv.", sum);
    }
}
