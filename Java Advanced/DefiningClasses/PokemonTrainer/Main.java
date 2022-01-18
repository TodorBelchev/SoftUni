package Classes.PokemonTrainer;

import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        Map<String, Trainer> trainers = new LinkedHashMap<>();

        while (!input[0].equals("Tournament")) {
            String trainerName = input[0];
            String pokemonName = input[1];
            String element = input[2];
            int health = Integer.parseInt(input[3]);

            Pokemon pokemon = new Pokemon(pokemonName, element, health);
            Trainer trainer = new Trainer(trainerName);

            trainers.putIfAbsent(trainerName, trainer);
            trainers.get(trainerName).addPokemon(pokemon);

            input = scanner.nextLine().split("\\s+");
        }

        String command = scanner.nextLine();
        while (!command.equals("End")) {
            String finalCommand = command;
            trainers.values().forEach(t -> t.checkElement(finalCommand));

            command = scanner.nextLine();
        }

        trainers.values().stream()
                .sorted(Comparator.comparing(Trainer::getBadges).reversed())
                .forEach(System.out::println);
    }
}
