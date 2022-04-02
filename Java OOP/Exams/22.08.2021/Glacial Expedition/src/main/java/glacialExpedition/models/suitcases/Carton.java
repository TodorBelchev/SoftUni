package glacialExpedition.models.suitcases;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Carton implements Suitcase {
    Collection<String> exhibits;

    public Carton() {
        this.exhibits = new ArrayList<>();
    }

    public void addExhibit(String exhibit) {
        this.exhibits.add(exhibit);
    }

    @Override
    public Collection<String> getExhibits() {
        return this.exhibits;
    }
}
