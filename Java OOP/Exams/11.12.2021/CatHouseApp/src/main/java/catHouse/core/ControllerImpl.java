package catHouse.core;

import catHouse.entities.cat.Cat;
import catHouse.entities.cat.LonghairCat;
import catHouse.entities.cat.ShorthairCat;
import catHouse.entities.houses.House;
import catHouse.entities.houses.LongHouse;
import catHouse.entities.houses.ShortHouse;
import catHouse.entities.toys.Ball;
import catHouse.entities.toys.Mouse;
import catHouse.entities.toys.Toy;
import catHouse.repositories.ToyRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import static catHouse.common.ConstantMessages.*;
import static catHouse.common.ExceptionMessages.*;

public class ControllerImpl implements Controller {
    private ToyRepository toys;
    private Collection<House> houses;

    public ControllerImpl() {
        this.toys = new ToyRepository();
        this.houses = new ArrayList<>();
    }

    @Override
    public String addHouse(String type, String name) {
        House house;
        switch (type) {
            case "ShortHouse":
                house = new ShortHouse(name);
                break;
            case "LongHouse":
                house = new LongHouse(name);
                break;
            default:
                throw new NullPointerException(INVALID_HOUSE_TYPE);
        }

        this.houses.add(house);
        return String.format(SUCCESSFULLY_ADDED_HOUSE_TYPE, type);
    }

    @Override
    public String buyToy(String type) {
        Toy toy;
        switch (type) {
            case "Ball":
                toy = new Ball();
                break;
            case "Mouse":
                toy = new Mouse();
                break;
            default:
                throw new IllegalArgumentException(INVALID_TOY_TYPE);
        }

        this.toys.buyToy(toy);
        return String.format(SUCCESSFULLY_ADDED_TOY_TYPE, type);
    }

    @Override
    public String toyForHouse(String houseName, String toyType) {
        Toy toy = this.toys.getToyByType(toyType);

        if (toy == null) {
            throw new IllegalArgumentException(String.format(NO_TOY_FOUND, toyType));
        }

        House house = getHouse(houseName);

        this.toys.removeToy(toy);
        if (house != null) {
            house.buyToy(toy);
        }

        return String.format(SUCCESSFULLY_ADDED_TOY_IN_HOUSE, toyType, houseName);
    }

    @Override
    public String addCat(String houseName, String catType, String catName, String catBreed, double price) {
        Cat cat;
        House house = getHouse(houseName);

        switch (catType) {
            case "ShorthairCat":
                cat = new ShorthairCat(catName, catBreed, price);
                break;
            case "LonghairCat":
                cat = new LonghairCat(catName, catBreed, price);
                break;
            default:
                throw new IllegalArgumentException(INVALID_CAT_TYPE);
        }

        if (house != null) {
            if ((house.getClass().getSimpleName().equals("ShortHouse") && catType.equals("LonghairCat"))
                    || (house.getClass().getSimpleName().equals("LongHouse") && catType.equals("ShorthairCat"))) {
                return UNSUITABLE_HOUSE;
            }

            house.addCat(cat);
        }

        return String.format(SUCCESSFULLY_ADDED_CAT_IN_HOUSE, catType, houseName);
    }

    @Override
    public String feedingCat(String houseName) {
        House house = getHouse(houseName);

        if (house != null) {
            house.feeding();
        }

        return String.format(FEEDING_CAT, house.getCats().size());
    }

    @Override
    public String sumOfAll(String houseName) {
        House house = getHouse(houseName);

        if (house != null) {
            double catsPriceSum = house.getCats().stream()
                    .mapToDouble(Cat::getPrice)
                    .sum();

            double toysPriceSum = house.getToys().stream()
                    .mapToDouble(Toy::getPrice)
                    .sum();

            return String.format(VALUE_HOUSE, houseName, catsPriceSum + toysPriceSum);
        }
        return null;
    }

    @Override
    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        this.houses.forEach(h -> {
            String catsString = h.getCats().stream().map(Cat::getName).collect(Collectors.joining(" "));
            sb.append(String.format("%s %s:%n", h.getName(), h.getClass().getSimpleName()));
            sb.append(String.format("Cats: %s%n", catsString.length() > 0 ? catsString : "none"));
            sb.append(String.format("Toys: %d Softness: %d%n", h.getToys().size(), h.sumSoftness()));
        });

        return sb.toString().trim();
    }

    private House getHouse(String houseName) {
        return this.houses.stream()
                .filter(h -> h.getName().equals(houseName))
                .findFirst()
                .orElse(null);
    }
}
