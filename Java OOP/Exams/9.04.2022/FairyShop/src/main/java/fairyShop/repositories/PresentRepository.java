package fairyShop.repositories;

import fairyShop.models.Present;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class PresentRepository implements Repository<Present> {
    private Collection<Present> presents;

    public PresentRepository() {
        this.presents = new ArrayList<>();
    }

    @Override
    public Collection<Present> getModels() {
        return Collections.unmodifiableCollection(this.presents);
    }

    @Override
    public void add(Present model) {
        this.presents.add(model);
    }

    @Override
    public boolean remove(Present model) {
        return this.presents.remove(model);
    }

    @Override
    public Present findByName(String name) {
        return this.presents.stream()
                .filter(h -> h.getName().equals(name))
                .findFirst()
                .orElse(null);
    }
}
