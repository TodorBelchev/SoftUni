package Classes.Google;


import java.util.ArrayList;
import java.util.List;

public class Person {
    private String name;
    private Company company;
    private List<Pokemon> pokemonList;
    private List<Parent> parentList;
    private List<Children> childrenList;
    private Car car;

    public Person(String name) {
        this.name = name;
        this.pokemonList = new ArrayList<>();
        this.parentList = new ArrayList<>();
        this.childrenList = new ArrayList<>();
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public void addPokemon(Pokemon pokemon) {
        if (!this.pokemonList.contains(pokemon)) {
            pokemonList.add(pokemon);
        }
    }

    public void addParent(Parent parent) {
        if (!this.parentList.contains(parent)) {
            parentList.add(parent);
        }
    }

    public void addChildren(Children children) {
        if (!this.childrenList.contains(children)) {
            childrenList.add(children);
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(this.name).append("\n")
                .append("Company:\n");
        if (this.company != null) {
            sb.append(this.company.toString()).append("\n");
        }
        sb.append("Car:\n");
        if (this.car != null) {
            sb.append(this.car.toString()).append("\n");
        }
        sb.append("Pokemon:\n");
        if (this.pokemonList.size() > 0) {
            this.pokemonList.forEach(p -> sb.append(p.toString()).append("\n"));
        }
        sb.append("Parents:\n");
        if (this.parentList.size() > 0) {
            this.parentList.forEach(p -> sb.append(p.toString()).append("\n"));
        }
        sb.append("Children:\n");
        if (this.childrenList.size() > 0) {
            this.childrenList.forEach(c -> sb.append(c.toString()).append("\n"));
        }
        return sb.toString();
    }
}
