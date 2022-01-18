package Classes.PokemonTrainer;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Trainer {
    private String name;
    private int badges;
    private List<Pokemon> pokemons;

    public Trainer(String name) {
        this.name = name;
        this.badges = 0;
        this.pokemons = new ArrayList<>();
    }

    public int getBadges() {
        return badges;
    }

    public void addPokemon(Pokemon pokemon) {
        this.pokemons.add(pokemon);
    }

    public void checkElement(String element) {
        boolean isPresent = this.pokemons.stream().anyMatch(p -> p.getElement().equals(element));
        if (isPresent) {
            this.badges++;
        } else {
            this.pokemons = this.pokemons.stream()
                    .map(p -> {
                        p.setHealth(p.getHealth() - 10);
                        return p;
                    })
                    .filter(p -> p.getHealth() > 0).collect(Collectors.toList());
        }
    }

    @Override
    public String toString() {
        return String.format("%s %d %d", this.name, this.badges, this.pokemons.size());
    }
}
