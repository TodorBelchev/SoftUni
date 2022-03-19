package reflection.barracksWars.core.commands;

import jdk.jshell.spi.ExecutionControl;
import reflection.barracksWars.core.Inject;
import reflection.barracksWars.interfaces.Repository;


public class Retire extends Command {

    @Inject
    Repository repository;

    public Retire(String[] data) {
        super(data);
    }

    @Override
    public String execute() throws ExecutionControl.NotImplementedException {
        String unitType = getData()[1];
        this.repository.removeUnit(unitType);
        return unitType + " retired!";
    }
}
