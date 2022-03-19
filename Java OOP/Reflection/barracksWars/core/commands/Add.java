package reflection.barracksWars.core.commands;

import jdk.jshell.spi.ExecutionControl;
import reflection.barracksWars.core.Inject;
import reflection.barracksWars.interfaces.Repository;
import reflection.barracksWars.interfaces.Unit;
import reflection.barracksWars.interfaces.UnitFactory;

import java.lang.reflect.InvocationTargetException;

public class Add extends Command {

    @Inject
    private Repository repository;

    @Inject
    private UnitFactory unitFactory;

    public Add(String[] data) {
        super(data);
    }

    @Override
    public String execute() throws ExecutionControl.NotImplementedException, ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException {
        String unitType = super.getData()[1];
        Unit unitToAdd = this.unitFactory.createUnit(unitType);
        this.repository.addUnit(unitToAdd);
        String output = unitType + " added!";
        return output;
    }
}
