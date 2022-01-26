package IteratorsAndComparators.PetClinics;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        List<Pet> pets = new ArrayList<>();
        List<Clinic> clinics = new ArrayList<>();
        String invalidOperation = "Invalid Operation!";

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String command = input[0];
            Clinic clinic;

            switch (command) {
                case "Create":
                    if (input[1].equals("Pet")) {
                        pets.add(new Pet(input[2], Integer.parseInt(input[3]), input[4]));
                    } else {
                        int numberOfRooms = Integer.parseInt(input[3]);
                        if (numberOfRooms % 2 == 0) {
                            System.out.println(invalidOperation);
                            break;
                        }
                        clinics.add(new Clinic(input[2], numberOfRooms));
                    }
                    break;
                case "HasEmptyRooms":
                    clinic = clinics.stream().filter(c -> c.getName().equals(input[1])).findFirst().orElse(null);
                    if (clinic == null) {
                        System.out.println(invalidOperation);
                        break;
                    }
                    System.out.println(clinic.hasEmptyRoom());
                    break;
                case "Release":
                    clinic = clinics.stream().filter(c -> c.getName().equals(input[1])).findFirst().orElse(null);
                    if (clinic == null) {
                        System.out.println(invalidOperation);
                        break;
                    }
                    System.out.println(clinic.release());
                    break;
                case "Add":
                    clinic = clinics.stream().filter(c -> c.getName().equals(input[2])).findFirst().orElse(null);
                    if (clinic == null) {
                        System.out.println(invalidOperation);
                        break;
                    }
                    Pet pet = pets.stream().filter(p -> p.getName().equals(input[1])).findFirst().orElse(null);
                    if (pet == null) {
                        System.out.println(invalidOperation);
                        break;
                    }
                    System.out.println(clinic.add(pet));
                    break;
                case "Print":
                    clinic = clinics.stream().filter(c -> c.getName().equals(input[1])).findFirst().orElse(null);
                    if (clinic == null) {
                        System.out.println(invalidOperation);
                        break;
                    }
                    if (input.length == 3) {
                        clinic.print(Integer.parseInt(input[2]));
                    } else {
                        clinic.print();
                    }
                    break;
            }
        }
    }
}
