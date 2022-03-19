package reflection.barracksWars.core.commands;

import reflection.barracksWars.interfaces.Executable;

public abstract class Command implements Executable {
    private String[] data;

    protected Command(String[] data) {
        this.data = data;
    }

    public String[] getData() {
        return data;
    }

}
